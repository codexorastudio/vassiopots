import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useStore, useCartSubtotal } from "@/context/StoreContext";
import { orderService } from "@/services/orderService";
import { ShoppingBag, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Vassio" },
      { name: "description", content: "Complete your order with Vassio" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cartItems, clearCart } = useStore();
  const subtotal = useCartSubtotal();
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<any | null>(null);

  const shippingFee = subtotal > 5000 ? 0 : 350; // Free shipping over ₹5000, else ₹350
  const total = subtotal + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !address || !city || !state || !pincode) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const order = await orderService.createOrder({
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        address,
        city,
        state,
        pincode,
        items: cartItems.map(item => ({
          code: item.code,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          sizeName: item.sizeName
        })),
        subtotal,
        shippingFee,
        total,
      });

      setPlacedOrder(order);
      clearCart();
      toast.success("Order placed successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error("There was a problem placing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (placedOrder) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary animate-pulse">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">Order Confirmed</p>
          <h1 className="serif text-4xl md:text-5xl text-foreground mb-4">Thank You For Your Order!</h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
            Your order has been placed successfully. Your order ID is{" "}
            <span className="font-mono font-bold text-foreground bg-secondary/10 px-2 py-1 rounded">
              {placedOrder.id}
            </span>. We will contact you soon.
          </p>

          <div className="border border-border/40 rounded-2xl bg-white p-6 max-w-md mx-auto mb-8 text-left space-y-4 shadow-sm">
            <h3 className="font-sans font-bold text-xs text-foreground/80 uppercase tracking-wider">Shipping Details</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">{placedOrder.customerName}</p>
              <p>{placedOrder.customerPhone}</p>
              <p>{placedOrder.address}, {placedOrder.city}, {placedOrder.state} - {placedOrder.pincode}</p>
            </div>
            <div className="border-t border-border/30 pt-4 flex justify-between items-center text-sm">
              <span className="font-bold text-foreground">Total Paid:</span>
              <span className="font-bold text-primary text-base font-mono">₹{placedOrder.total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <button
            onClick={() => navigate({ to: "/" })}
            className="bg-primary hover:bg-primary/95 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] rounded-xl shadow-md transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="mx-auto max-w-md px-6 py-16 md:py-24 text-center">
          <ShoppingBag className="h-14 w-14 text-muted-foreground/30 mx-auto mb-6" />
          <h2 className="serif text-3xl text-foreground mb-2">Your Cart is Empty</h2>
          <p className="text-sm text-muted-foreground mb-8">You need items in your cart to checkout.</p>
          <button
            onClick={() => navigate({ to: "/" })}
            className="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-primary/90 transition cursor-pointer"
          >
            Go to Shop
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition mb-8 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </button>

        <h1 className="serif text-3xl md:text-4xl text-foreground mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Shipping Form */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-border/30 rounded-3xl p-6 md:p-8 shadow-sm">
              <h2 className="serif text-xl text-foreground border-b border-border/30 pb-4 mb-4">Shipping Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ananya Sharma"
                    className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ananya.sharma@example.com"
                  className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">Street Address *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat No, Building Name, Street Name"
                  className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 mb-3"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Mumbai"
                    className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">State *</label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Maharashtra"
                    className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">Pincode *</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="400050"
                    className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm font-medium bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="border-t border-border/30 pt-6 mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/95 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Placing Order..." : "Confirm & Place Order"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FCFCF8] border border-border/30 rounded-3xl p-6 md:p-8 shadow-sm">
              <h2 className="serif text-xl text-foreground border-b border-border/30 pb-4 mb-4">Order Summary</h2>

              {/* Items List */}
              <div className="divide-y divide-border/20 max-h-[300px] overflow-y-auto pr-2 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.code}-${item.sizeName ?? ""}`} className="py-3 flex gap-4 items-center">
                    <div className="h-16 w-12 rounded bg-secondary overflow-hidden border border-border/10">
                      <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-bold text-xs text-foreground/90 line-clamp-1">{item.name}</p>
                      {item.sizeName && <p className="text-[10px] text-muted-foreground">{item.sizeName}</p>}
                      <p className="text-xs text-muted-foreground mt-0.5">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-foreground font-mono">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-border/20 pt-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping Fee</span>
                  <span>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-[10px] text-right text-muted-foreground italic">Add ₹{(5000 - subtotal).toLocaleString("en-IN")} more for Free Shipping</p>
                )}
                <div className="flex justify-between items-center text-base font-bold text-foreground border-t border-border/30 pt-4 mt-2">
                  <span>Total Amount</span>
                  <span className="text-primary font-mono">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="mt-8 border-t border-border/25 pt-6 flex items-center gap-3 text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <p className="text-[10px] leading-relaxed">
                  Your purchase is secure. By placing this order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
