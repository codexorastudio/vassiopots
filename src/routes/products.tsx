import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { ShoppingBag, Search, SlidersHorizontal, ArrowUpDown, X, Check, Filter } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useStore } from "@/context/StoreContext";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/types/product";

interface ProductsSearch {
  color?: string;
  size?: string;
  price?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "discount" | "alphabetical";
  q?: string;
}

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => {
    return {
      color: (search.color as string) || undefined,
      size: (search.size as string) || undefined,
      price: (search.price as string) || undefined,
      sort: (search.sort as any) || undefined,
      q: (search.q as string) || undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Products — Vassio Fiberglass Planters & FRP Pots" },
      {
        name: "description",
        content:
          "Explore the complete collection of Vassio fiberglass (FRP) planters, tapered pots, bullet planters, fluted vessels, and architectural bowls.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { products: liveProducts } = useProducts();
  const search = useSearch({ from: "/products" });
  const navigate = useNavigate({ from: "/products" });
  const { addToCart } = useStore();

  const activeColor = search.color || "all";
  const activeSize = search.size || "all";
  const activePrice = search.price || "all";
  const activeSort = search.sort || "featured";
  const [searchQuery, setSearchQuery] = useState(search.q || "");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setSearchQuery(search.q || "");
  }, [search.q]);

  const updateFilters = (newParams: Partial<ProductsSearch>) => {
    navigate({
      search: (prev: any) => {
        const updated = { ...prev, ...newParams };
        if (updated.color === "all") delete updated.color;
        if (updated.size === "all") delete updated.size;
        if (updated.price === "all") delete updated.price;
        if (updated.sort === "featured") delete updated.sort;
        if (!updated.q) delete updated.q;
        return updated;
      },
      replace: true,
    });
  };

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    let result = [...liveProducts];

    // Color filter
    if (activeColor !== "all") {
      const target = activeColor.toLowerCase();
      result = result.filter((p) => {
        const prodColor = (p.color || "").toLowerCase();
        const prodName = p.name.toLowerCase();
        const hasColorInSizes = p.sizes?.some((s: any) =>
          s.colors?.some((c: string) => c.toLowerCase().includes(target))
        );
        return (
          prodColor.includes(target) ||
          prodName.includes(target) ||
          hasColorInSizes
        );
      });
    }

    // Size filter (A, B, C, D, E)
    if (activeSize !== "all") {
      const targetSize = activeSize.toUpperCase();
      result = result.filter((p) => {
        if (!p.sizes || p.sizes.length === 0) return true;
        return p.sizes.some((s: any) => {
          const sLabel = (s.label || s.name || "").toUpperCase();
          return sLabel === targetSize || sLabel.endsWith(`-${targetSize}`) || sLabel.includes(`SIZE ${targetSize}`);
        });
      });
    }

    // Price range filter
    if (activePrice !== "all") {
      if (activePrice === "under-5000") {
        result = result.filter((p) => (p.price || 0) < 5000);
      } else if (activePrice === "5000-10000") {
        result = result.filter((p) => (p.price || 0) >= 5000 && (p.price || 0) <= 10000);
      } else if (activePrice === "above-10000") {
        result = result.filter((p) => (p.price || 0) > 10000);
      }
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          (p.color || "").toLowerCase().includes(q) ||
          (p.material || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
      );
    }

    // Sorting
    if (activeSort === "price-asc") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (activeSort === "discount") {
      result.sort((a, b) => {
        const discA = Math.round((((a.mrp || 0) - (a.price || 0)) / (a.mrp || 1)) * 100);
        const discB = Math.round((((b.mrp || 0) - (b.price || 0)) / (b.mrp || 1)) * 100);
        return discB - discA;
      });
    } else if (activeSort === "alphabetical") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [liveProducts, activeColor, activeSize, activePrice, searchQuery, activeSort]);

  const hasActiveFilters = activeColor !== "all" || activeSize !== "all" || activePrice !== "all" || Boolean(searchQuery);

  const resetAllFilters = () => {
    setSearchQuery("");
    navigate({
      search: {},
      replace: true,
    });
  };

  return (
    <Layout>
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:py-16">
        {/* Breadcrumbs */}
        <nav className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">All FRP Pots</span>
        </nav>

        {/* Hero Banner */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-2">
            Architectural Fiberglass Catalogue
          </p>
          <h1 className="serif text-4xl md:text-6xl text-foreground">Complete FRP Pots Collection</h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Browse all 36 premium fiberglass (FRP) planter series. UV-protected, lightweight, frost-resistant, and hand-finished for indoor & outdoor luxury living.
          </p>
        </div>

        {/* ─── FILTER CONTROL BAR ────────────────────────────────────────────────── */}
        <div className="bg-card border border-border/40 rounded-3xl p-5 md:p-6 mb-10 shadow-xs space-y-5">
          {/* Row 1: Search Bar & Sort Dropdown */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search series code, color, or shape..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  updateFilters({ q: e.target.value || undefined });
                }}
                className="w-full pl-10 pr-8 py-2.5 bg-background border border-border/50 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    updateFilters({ q: undefined });
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Toggle Filters button */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-secondary border border-border/50 rounded-xl text-xs font-bold uppercase tracking-wider text-foreground"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters {showMobileFilters ? "-" : "+"}
              </button>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
                <Select value={activeSort} onValueChange={(val) => updateFilters({ sort: val as any })}>
                  <SelectTrigger className="w-[180px] sm:w-[210px] bg-background border-border/50 rounded-xl h-10 text-xs font-semibold focus:ring-1 focus:ring-primary">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured" className="text-xs cursor-pointer">Sort by: Featured</SelectItem>
                    <SelectItem value="price-asc" className="text-xs cursor-pointer">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc" className="text-xs cursor-pointer">Price: High to Low</SelectItem>
                    <SelectItem value="discount" className="text-xs cursor-pointer">Biggest Discount</SelectItem>
                    <SelectItem value="alphabetical" className="text-xs cursor-pointer">Alphabetical: A–Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 2: Filter Pills (Desktop Always Visible, Mobile Collapsible) */}
          <div className={`${showMobileFilters ? "block" : "hidden md:block"} space-y-4 pt-2 border-t border-border/30`}>
            {/* Color Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 mr-2 flex items-center gap-1">
                <Filter className="h-3 w-3" /> Color:
              </span>
              {[
                { id: "all", label: "All Colors" },
                { id: "black", label: "Black" },
                { id: "white", label: "White" },
                { id: "grey", label: "Grey" },
                { id: "beige", label: "Beige" },
                { id: "green", label: "Green" },
                { id: "brown", label: "Brown" },
                { id: "yellow", label: "Yellow" },
                { id: "red", label: "Red" },
                { id: "plain", label: "Plain / Shining" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => updateFilters({ color: c.id })}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeColor === c.id
                      ? "bg-primary text-white shadow-xs"
                      : "bg-background border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Size Filter & Price Range Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              {/* Size Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 mr-2">
                  Available Size:
                </span>
                {[
                  { id: "all", label: "All Sizes" },
                  { id: "a", label: "Size A" },
                  { id: "b", label: "Size B" },
                  { id: "c", label: "Size C" },
                  { id: "d", label: "Size D" },
                  { id: "e", label: "Size E" },
                ].map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => updateFilters({ size: sz.id })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeSize === sz.id
                        ? "bg-primary text-white shadow-xs"
                        : "bg-background border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>

              {/* Price Range Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 mr-2">
                  Price:
                </span>
                {[
                  { id: "all", label: "All Prices" },
                  { id: "under-5000", label: "Under ₹5k" },
                  { id: "5000-10000", label: "₹5k – ₹10k" },
                  { id: "above-10000", label: "Above ₹10k" },
                ].map((pr) => (
                  <button
                    key={pr.id}
                    onClick={() => updateFilters({ price: pr.id })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activePrice === pr.id
                        ? "bg-primary text-white shadow-xs"
                        : "bg-background border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {pr.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter & Clear Filters button */}
        <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground">
          <p className="font-medium">
            Showing <span className="font-bold text-foreground">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "planter series" : "planter series"}
          </p>
          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="text-primary font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <X className="h-3.5 w-3.5" /> Clear All Filters
            </button>
          )}
        </div>

        {/* ─── PRODUCT GRID ──────────────────────────────────────────────────────── */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/40 rounded-3xl bg-card">
            <p className="serif text-2xl text-foreground mb-2">No Planters Found</p>
            <p className="text-xs text-muted-foreground mb-6">
              No planters matched your selected filters. Try clearing your filters to view all 36 FRP series.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((p) => {
              const price = p.price ?? 0;
              const mrp = p.mrp ?? 0;
              const off = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;
              return (
                <div
                  key={p.code}
                  className="group flex flex-col bg-background border border-border/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <Link
                    to="/product/$productId"
                    params={{ productId: p.code }}
                    className="block overflow-hidden relative aspect-[4/5] bg-secondary"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {off > 0 && (
                      <span className="absolute top-3 left-3 bg-[#3F673F] text-white border border-[#5B8550] text-[10px] uppercase tracking-widest px-2.5 py-1 font-bold rounded shadow-xs">
                        {off}% OFF
                      </span>
                    )}
                  </Link>
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                        {p.color || p.material}
                      </span>
                      <Link
                        to="/product/$productId"
                        params={{ productId: p.code }}
                        className="font-bold text-sm text-foreground hover:text-primary transition-colors line-clamp-1"
                      >
                        {p.name}
                      </Link>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-primary">
                          {price > 0 ? `₹${price.toLocaleString("en-IN")}` : "Price on request"}
                        </span>
                        {mrp > price && (
                          <span className="text-xs text-muted-foreground line-through ml-2">
                            ₹{mrp.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          addToCart({
                            code: p.code,
                            name: p.name,
                            img: p.img,
                            price,
                            mrp,
                          });
                          toast.success(`Added ${p.name} to cart!`);
                        }}
                        className="p-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white transition-colors cursor-pointer"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
