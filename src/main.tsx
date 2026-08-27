import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./styles.css";

class GlobalErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("[GlobalErrorBoundary] Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", background: "#fef2f2", color: "#991b1b", minHeight: "100vh" }}>
          <h2>Application Render Error</h2>
          <pre style={{ whiteSpace: "pre-wrap", background: "#ffffff", padding: "20px", borderRadius: "8px", border: "1px solid #fca5a5" }}>
            {this.state.error?.stack || String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element #root not found in document");
  }
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GlobalErrorBoundary>
        <RouterProvider router={router} />
      </GlobalErrorBoundary>
    </React.StrictMode>
  );
} catch (err: any) {
  console.error("[Vassio App] Fatal mount error:", err);
  document.body.innerHTML = `<div style="padding:40px;color:red;font-family:sans-serif;"><h2>Fatal Mount Error</h2><pre>${err?.stack || err}</pre></div>`;
}
