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
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={`/products/${product.handle}`} className="group">
              <div className="h-64 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  // alt={product.imageAlt}
                  src={product.images?.[0]?.url}
                  className="h-full w-full object-contain object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-400">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.variants?.[0]?.prices?.[0]?.amount / 100}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}