import { ProductType } from "@/types/ProductType";
import ProductImages from "./ProductImages";
import { formatPrice } from '@/lib/utils'
import AddCart from './AddCart'

type ProductProps = {
    product: ProductType
}

export default function Product({ product }: ProductProps) {
    return (
        <div className="product-box">
            <div className="product-box__img">
                <ProductImages product={product} fill />
            </div>
            <div className="product-box__info">
                <p className="title"> {product.name} </p>
                <p className="price"> {formatPrice(product.price)} </p>
            </div>
            < AddCart product={product}/>
        </div>
    );
}