import Image from "next/image";
import styles from "./page.module.css";
import { Children } from "react";
import './styles/_navbar.scss';
import './styles/_products.scss';
import './styles/_cart.scss';
import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";
import Stripe from "stripe";

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
  });

  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id
      });
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency
      }
    })
  );

  return formatedProducts;

}

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="grid">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
}
