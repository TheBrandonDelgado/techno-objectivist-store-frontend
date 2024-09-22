'use client'

import { useState, useEffect } from "react";
import medusaClient from "../lib/medusa-client";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const { products } = await medusaClient.products.list();
            console.log(products);
            setProducts(products);
        } catch (error) {
            console.error(error);
        }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          {/* <p className="mt-2 font-bold">${product.variants[0].prices[0].amount / 100}</p> */}
        </div>
      ))}
    </div>
  );
}