import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./types/ProductType";

type CartState = {
    cart: ProductType[];
    addToCart: (product: ProductType) => void;
    removeFromCart: (product: ProductType) => void;
    isOpen: boolean;
    toggleCart: () => void;
}

export const userCartStore = create<CartState>()(
    persist((set) => ({
        cart: [],
        addToCart: (item) =>
            set((state) => {
                const product = state.cart.find((p) => p.id === item.id);
                if (product) {
                    const updatedCart = state.cart.map((p) => {
                        if (p.id === item.id) {
                            return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                        }
                        return p;
                    });
                    return { cart: updatedCart }
                } else {
                    return { cart: [...state.cart, { ...item, quantity: 1 }] };
                }
            }),
        removeFromCart: (item) =>
            set((state) => {
                const existingProduct = state.cart.find((p) => p.id === item.id);

                if (existingProduct && existingProduct.quantity! > 1) {
                    const updatedCart = state.cart.map((p) => {
                        if (p.id === item.id) {
                            return { ...p, quantity: p.quantity! - 1 }
                        }
                        return p;
                    });
                    return { cart: updatedCart };
                } else {
                    const filteredCart = state.cart.filter((p) => p.id !== item.id);
                    return { cart: filteredCart }
                }

            }),
        isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }), { name:'cart-storage' })
);