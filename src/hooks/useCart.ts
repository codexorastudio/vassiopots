import { useStore, type CartItem } from "@/context/StoreContext";

export function useCart() {
  const { cartItems: cart, addToCart, removeFromCart, updateCartQuantity: updateQuantity, clearCart, isCartOpen, openCart, closeCart } = useStore();

  const cartCount = cart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc: number, item: CartItem) => acc + (item.price || 0) * item.quantity, 0);
  const cartMrpTotal = cart.reduce((acc: number, item: CartItem) => acc + (item.mrp || item.price || 0) * item.quantity, 0);
  const cartSavings = Math.max(0, cartMrpTotal - cartSubtotal);

  return {
    cart,
    cartCount,
    cartSubtotal,
    cartMrpTotal,
    cartSavings,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
  };
}

export default useCart;
