'use client'

import { userCartStore } from "@/store"
import { ProductType } from "@/types/ProductType"

export default function Product({ product }: { product: ProductType }) {
    const { addToCart } = userCartStore();

    return (
        <button onClick={() => addToCart(product)} className="product-box__button">
            Comprar
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-bt"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
    )
}