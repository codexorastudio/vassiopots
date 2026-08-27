import { useStore, useWishlistProducts } from "@/context/StoreContext";

export function useWishlist() {
  const { wishlistIds, toggleWishlist, isInWishlist } = useStore();
  const wishlistProducts = useWishlistProducts();

  const wishlistCount = wishlistIds.size;

  return {
    wishlistIds,
    wishlistProducts,
    wishlistCount,
    toggleWishlist,
    isInWishlist,
  };
}

export default useWishlist;
