import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function PendingLoader() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#FCFCF8" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "40px", height: "40px", border: "3px solid #E5E7EB", borderTopColor: "#7FA93A", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
        <p style={{ fontFamily: "sans-serif", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563" }}>
          Loading Vassio...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: PendingLoader,
});

export const getRouter = () => router;
