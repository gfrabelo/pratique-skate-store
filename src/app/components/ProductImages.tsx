'use client'
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImages({ product, fill }: ProductImageProps) {
    const [loading, setLoading] = useState(true);
    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.name}
            className={`product-img ${
                loading ? 'blur-active'
                : 'blur-desactive'
            }`}
            onLoad={ () => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={800}
            fill
            alt={product.name}
            className={`product-img ${
                loading ? 'blur-active'
                : 'blur-desactive'
            }`}
            onLoadingComplete={ () => setLoading(false)}
        />
    );
}