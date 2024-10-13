'use client'

import { useState, useEffect } from "react";
import medusaClient from "../../lib/medusa-client";
import Product from "./Product";

const ProductList = () => {
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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 
          sm:grid-cols-3 
          lg:grid-cols-3 
          xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}

export default ProductList;