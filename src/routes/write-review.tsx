import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { Star, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { reviewStore } from "@/services/reviewStore";

export const Route = createFileRoute("/write-review")({
  head: () => ({
    meta: [
      { title: "Write a Review — Vassio" },
      {
        name: "description",
        content: "Share your thoughts on the products you purchased from Vassio.",
      },
    ],
  }),
  component: WriteReviewPage,
});

function WriteReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    rating: 0,
    review: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.product || formData.rating === 0 || !formData.review) {
      toast.error("Please fill in all required fields and select a rating.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      reviewStore.addReview({
        productId: formData.product,
        customerId: formData.email,
        customerName: formData.name,
        rating: formData.rating,
        title: "Customer Review",
        description: formData.review,
        isVerified: true,
      });
      setSubmitting(false);
      toast.success("Thank you for your review! It has been submitted successfully.");
      setFormData({ name: "", email: "", product: "", rating: 0, review: "" });
    }, 800);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-[1000px] px-6 py-12 md:py-16">
        {/* Breadcrumbs */}
        <nav className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Write a Review</span>
        </nav>

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-2">Share Your Experience</p>
          <h1 className="serif text-4xl md:text-5xl text-foreground">Write a Review</h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We'd love to hear about your experience with our products. Your feedback helps us improve and helps others make better choices.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border/40 rounded-3xl p-6 md:p-10 shadow-sm max-w-2xl mx-auto">
          <h3 className="serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            Submit Your Review
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                Product Purchased *
              </label>
              <input
                type="text"
                placeholder="e.g. Classic Off-White FRP Pot"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                Rating *
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none"
                  >
                    <Star
                      className={`h-8 w-8 transition-colors ${
                        star <= (hoverRating || formData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-2">
                {formData.rating === 0 ? "Select a star rating" : `You rated it ${formData.rating} out of 5 stars`}
              </p>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                Your Review *
              </label>
              <textarea
                rows={6}
                placeholder="What did you like or dislike about the product?"
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="w-full px-4 py-3 border border-border/50 rounded-xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary hover:bg-primary/95 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
            >
              {submitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Submit Review
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
