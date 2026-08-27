import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo } from "react";
import { products, vases, auxiliaryProducts } from "@/data/products";
import { ShoppingBag, ChevronDown, SlidersHorizontal, Check } from "lucide-react";
import { toast } from "sonner";

interface ShopSearch {
  category?: string;
  sort?: string;
}

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    return {
      category: (search.category as string) || undefined,
      sort: (search.sort as string) || undefined,
    };
  },
  component: ShopPage,
});

import { useProducts } from "@/hooks/useProducts";

function ShopPage() {
  const { products: liveProducts } = useProducts();
  const search = useSearch({ from: "/shop" });
  const [selectedCategory, setSelectedCategory] = useState<string>(search.category || "all");
  const [sortBy, setSortBy] = useState<string>(search.sort || "featured");
  const [gridCols, setGridCols] = useState<number>(3); // 2, 3, or 4 columns on desktop
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // Combine products and assign categories
  const allProductsList = useMemo(() => {
    return liveProducts.map((p) => {
      const lname = p.name.toLowerCase();
      const lmat = (p.material || "").toLowerCase();
      const lcode = p.code.toLowerCase();
      let category = "frp-pots";
      const isPlant =
        !lname.includes("planter") &&
        !lname.includes("pot") &&
        (lname.includes("artificial plant") || lname.includes("tree") || lname.includes("faux") || lcode.startsWith("fft"));

      if (isPlant) {
        category = "artificial-plants";
      } else if (lmat.includes("marble") || lname.includes("pebble")) {
        category = "pebbles";
      } else if (lcode.startsWith("abv") || lcode.startsWith("dsv")) {
        category = "terracotta-pots";
      } else {
        category = "frp-pots";
      }
      return { ...p, category };
    });
  }, [liveProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProductsList];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => 
        p.category === selectedCategory ||
        (selectedCategory === "pots" && (p.category === "frp-pots" || p.category === "terracotta-pots")) ||
        (selectedCategory === "frp" && p.category === "frp-pots") ||
        (selectedCategory === "terracotta" && p.category === "terracotta-pots") ||
        (selectedCategory === "plants" && p.category === "artificial-plants")
      );
    }

    // Price range filter
    if (priceRange !== "all") {
      if (priceRange === "under-2000") {
        result = result.filter((p) => p.price < 2000);
      } else if (priceRange === "2000-5000") {
        result = result.filter((p) => p.price >= 2000 && p.price <= 5000);
      } else if (priceRange === "above-5000") {
        result = result.filter((p) => p.price > 5000);
      }
    }

    // Stock filter
    if (inStockOnly) {
      result = result.filter((p) => !(p as any).isSoldOut);
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      result.sort((a, b) => {
        const discA = Math.round(((a.mrp - a.price) / a.mrp) * 100);
        const discB = Math.round(((b.mrp - b.price) / b.mrp) * 100);
        return discB - discA;
      });
    }

    return result;
  }, [allProductsList, selectedCategory, priceRange, inStockOnly, sortBy]);

  // Page content text based on category
  const headerContent = useMemo(() => {
    switch (selectedCategory) {
      case "frp-pots":
      case "frp":
        return {
          title: "FRP Pots & Fiberglass Planters",
          desc: "Explore all 36 premium fiberglass (FRP) planter series. Lightweight, UV-protected, and weather-resistant architectural vessels for home and garden.",
        };
      case "terracotta-pots":
      case "terracotta":
        return {
          title: "Terracotta & Clay Pots",
          desc: "Handcrafted terracotta vessels, ceramic pots, and clay planters. Organic textures and natural earth tones for botanical living.",
        };
      case "pebbles":
        return {
          title: "Pebbles & Decorative Stones",
          desc: "Curated river pebbles, polished white marble stones, and organic gravel toppings to accentuate planters and zen gardens.",
        };
      case "artificial-plants":
      case "plants":
        return {
          title: "Artificial Plants & Faux Trees",
          desc: "High-quality maintenance-free artificial plants, trees, and botanicals designed to stay vibrant year-round.",
        };
      default:
        return {
          title: "Complete Plant & Pot Collections",
          desc: "Discover Vassio's handcrafted fiberglass planters, terracotta pots, pebbles, and artificial plants for indoor and outdoor living.",
        };
    }
  }, [selectedCategory]);

  return (
    <Layout>
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Collections</span>
          <span>/</span>
          <span className="text-foreground">{headerContent.title}</span>
        </nav>

        {/* Heading & Description */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="serif text-4xl md:text-5xl text-foreground mb-4">
            {headerContent.title}
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            {headerContent.desc}
          </p>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="border-t border-b border-border/40 py-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-border/80 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-colors cursor-pointer select-none bg-background"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter {showFilters ? "-" : "+"}
            </button>

            {/* Sort Dropdown */}
            <div className="relative group">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] md:w-[220px] bg-background border border-border/80 px-6 py-2.5 h-[34px] text-[10px] font-bold uppercase tracking-[0.2em] rounded-none focus:ring-1 focus:ring-primary">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured" className="text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer">Sort By: Featured</SelectItem>
                  <SelectItem value="price-asc" className="text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc" className="text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer">Price: High to Low</SelectItem>
                  <SelectItem value="discount" className="text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer">Biggest Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Count & Grid Selection (Desktop Only) */}
          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            <span className="text-[11px] font-medium tracking-wider text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>

            <div className="hidden lg:flex items-center gap-2 border-l border-border/30 pl-6">
              <button
                onClick={() => setGridCols(2)}
                aria-label="2 columns grid"
                className={`p-1.5 transition-colors cursor-pointer ${
                  gridCols === 2 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="18" rx="1" />
                  <rect x="14" y="3" width="7" height="18" rx="1" />
                </svg>
              </button>
              <button
                onClick={() => setGridCols(3)}
                aria-label="3 columns grid"
                className={`p-1.5 transition-colors cursor-pointer ${
                  gridCols === 3 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="5" height="18" rx="1" />
                  <rect x="9.5" y="3" width="5" height="18" rx="1" />
                  <rect x="17" y="3" width="5" height="18" rx="1" />
                </svg>
              </button>
              <button
                onClick={() => setGridCols(4)}
                aria-label="4 columns grid"
                className={`p-1.5 transition-colors cursor-pointer ${
                  gridCols === 4 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="3.5" height="18" rx="0.5" />
                  <rect x="7.5" y="3" width="3.5" height="18" rx="0.5" />
                  <rect x="13" y="3" width="3.5" height="18" rx="0.5" />
                  <rect x="18.5" y="3" width="3.5" height="18" rx="0.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters Panel */}
        {showFilters && (
          <div className="bg-secondary/40 border border-border/20 p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {/* Categories */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">
                Category
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { id: "all", label: "All Products" },
                  { id: "frp-pots", label: "FRP Pots (Fiberglass)" },
                  { id: "terracotta-pots", label: "Terracotta Pots & Vases" },
                  { id: "pebbles", label: "Pebbles & Stones" },
                  { id: "artificial-plants", label: "Artificial Plants" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
                  >
                    <div className="h-4 w-4 border border-border flex items-center justify-center rounded-sm bg-background">
                      {selectedCategory === cat.id && <Check className="h-3 w-3 text-primary" />}
                    </div>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">
                Price Range
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { id: "all", label: "All Prices" },
                  { id: "under-2000", label: "Under ₹2,000" },
                  { id: "2000-5000", label: "₹2,000 - ₹5,000" },
                  { id: "above-5000", label: "Above ₹5,000" },
                ].map((price) => (
                  <button
                    key={price.id}
                    onClick={() => setPriceRange(price.id)}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
                  >
                    <div className="h-4 w-4 border border-border flex items-center justify-center rounded-sm bg-background">
                      {priceRange === price.id && <Check className="h-3 w-3 text-primary" />}
                    </div>
                    {price.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4">
                Availability
              </h4>
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  <div className="h-4 w-4 border border-border flex items-center justify-center rounded-sm bg-background">
                    {inStockOnly && <Check className="h-3 w-3 text-primary" />}
                  </div>
                  Exclude Out of Stock
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-border/50">
            <p className="serif text-xl text-foreground">No Products Found</p>
            <p className="text-muted-foreground text-xs mt-2">
              Try adjusting your filter options to see more results.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange("all");
                setInStockOnly(false);
              }}
              className="mt-6 bg-primary text-primary-foreground px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-primary/95 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-12 ${
              gridCols === 2 ? "lg:grid-cols-2" : gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {filteredProducts.map((p) => {
              const price = p.price ?? 0;
              const mrp = p.mrp ?? 0;
              const off = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;
              return (
                <Link
                  key={p.code}
                  to="/product/$productId"
                  params={{ productId: p.code }}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="relative overflow-hidden bg-secondary aspect-[4/5] border border-border/40 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-[#3F673F] text-white border border-[#5B8550] text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 font-bold rounded shadow-sm">
                      {(p as any).isSoldOut ? "Sold Out" : off > 0 ? `${off}% OFF` : "FEATURED"}
                    </span>
                    {/* View Product Banner (Desktop hover) */}
                    <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-primary py-3.5 text-center transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
                      <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase font-serif">
                        View Product
                      </span>
                    </div>
                    {/* Add to Cart button (Mobile) */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toast.success(`Added ${p.name} to Cart!`);
                      }}
                      className="lg:hidden absolute bottom-3 right-3 bg-primary hover:bg-primary/90 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-colors z-20"
                      aria-label="Add to Cart"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="product-name font-sans font-extrabold mt-4 text-base tracking-wide text-foreground/90 leading-tight group-hover:text-primary transition-colors">
                    {p.name}
                  </p>
                  <p className="mt-1.5 text-sm">
                    <span className="product-price font-sans font-bold text-primary">
                      {price > 0 ? `₹${price.toLocaleString("en-IN")}` : "Price on request"}
                    </span>
                    {mrp > price && (
                      <span className="ml-2 text-muted-foreground line-through text-xs font-sans">
                        ₹{mrp.toLocaleString("en-IN")}
                      </span>
                    )}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
