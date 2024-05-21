'use client'

import { userCartStore } from "@/store"
import { ProductType } from "@/types/ProductType"

export default function Product({ product }: { product: ProductType }) {
    const { addToCart } = userCartStore();

    return (
        <button onClick={() => addToCart(product)} className="product-box__button">Comprar</button>
    )
}