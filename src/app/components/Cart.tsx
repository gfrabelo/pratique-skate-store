'use client'
import { formatPrice } from "@/lib/utils";
import { userCartStore } from "@/store"
import Image from "next/image";

export default function Cart() {
    const useStore = userCartStore();

    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    

    return (
        <div className="cart-modal" onClick={() => useStore.toggleCart()}>
            <div className="cart-modal__container" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    <h2>Meu Carrinho</h2>
                    <span onClick={() => useStore.toggleCart()} className="close-cart">x</span>
                </div>
                {useStore.cart.map((item) => (
                    <div key={item.id} className="item-cart">
                        <Image 
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={100}
                            className="img"
                        />
                        <div className="info">
                            <h3 className="title">{item.name}</h3>
                            <div className="quantity-bt">
                                <button onClick={() => useStore.removeFromCart(item)}>
                                    -
                                </button>
                                <p>{item.quantity}</p>
                                <button onClick={() => useStore.addToCart(item)}>
                                    +
                                </button>
                            </div>                                 
                            <p className="price">{formatPrice(item.price)}</p>
                        </div> 
                    </div>
                ))}

                {useStore.cart.length > 0 && (
                    <div className="checkout">
                        <p className="checkout__price">Total: <span>{formatPrice(totalPrice)}</span></p>
                        <button className="checkout__button" onClick={() => alert('Compra Finalizada :)')}>Finalizar compra</button>
                    </div>
                ) || (
                    <h3 className="empty-cart">Seu carrinho está vazio... :(</h3>
                )} 
            </div>  
        </div>
    )
}