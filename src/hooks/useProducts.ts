import { useState, useEffect, useCallback } from "react";
import productService from "@/services/product.service";
import type { Product } from "@/types/product";

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  filterByCategory: (cat: string) => Product[];
  search: (query: string) => Product[];
}

/**
 * useProducts — fetches the full merged product catalog (static + Supabase).
 *
 * - Safe fallback initialization guarantees `products` is always an array.
 * - Single async fetch on mount (and on explicit refetch()).
 */
export function useProducts(category?: string): UseProductsReturn {
  const [allProducts, setAllProducts] = useState<Product[]>(() => {
    try {
      return productService.getAllProductsSync() || [];
    } catch (e) {
      console.error("[useProducts] getAllProductsSync error:", e);
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchTick, setFetchTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    productService
      .getAllProductsAsync()
      .then((list) => {
        if (!cancelled) {
          setAllProducts(Array.isArray(list) ? list : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("[useProducts] fetch failed:", err);
          setError("Failed to load product catalog. Please refresh.");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [fetchTick]);

  const refetch = useCallback(() => {
    setFetchTick((t) => t + 1);
  }, []);

  const safeAll = Array.isArray(allProducts) ? allProducts : [];

  const filteredProducts = category
    ? productService.filterByCategory(safeAll, category)
    : safeAll;

  const filterByCategory = useCallback(
    (cat: string) => productService.filterByCategory(safeAll, cat),
    [safeAll]
  );

  const search = useCallback(
    (query: string) => productService.searchInProducts(safeAll, query),
    [safeAll]
  );

  return {
    products: Array.isArray(filteredProducts) ? filteredProducts : [],
    loading,
    error,
    refetch,
    filterByCategory,
    search,
  };
}

/**
 * useProduct — fetches a single product by code.
 */
export function useProduct(code: string | undefined | null) {
  const [product, setProduct] = useState<Product | null>(() => {
    try {
      return productService.getProductByCodeSync(code) || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState<boolean>(() => {
    try {
      return code ? !productService.getProductByCodeSync(code) : false;
    } catch {
      return false;
    }
  });
  const [error, setError] = useState<string | null>(null);
  const [fetchTick, setFetchTick] = useState(0);

  useEffect(() => {
    if (!code) {
      setProduct(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    let syncProd: Product | null = null;
    try {
      syncProd = productService.getProductByCodeSync(code) || null;
    } catch {
      syncProd = null;
    }

    if (syncProd) {
      setProduct((prev) => prev ?? syncProd);
      setLoading(false);
    } else {
      setLoading(true);
    }
    setError(null);

    productService
      .getProductByCodeAsync(code)
      .then((p) => {
        if (!cancelled) {
          if (p) setProduct(p);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error(`[useProduct] fetch failed for ${code}:`, err);
          if (!syncProd) setError("Failed to load product.");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [code, fetchTick]);

  const refetch = useCallback(() => {
    setFetchTick((t) => t + 1);
  }, []);

  return { product, loading, error, refetch };
}

export default useProducts;
