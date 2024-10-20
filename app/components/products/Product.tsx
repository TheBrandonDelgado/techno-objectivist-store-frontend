import Link from "next/link";

const Product = ({ product }: any) => {
    return (
      <Link key={product.id} href={`/products/${product.handle}`} className="group">
        <div className="h-64 w-full overflow-hidden rounded-lg 
          xl:aspect-h-8 xl:aspect-w-7">
          <img
            // alt={product.imageAlt}
            src={product.images?.[0]?.url}
            className="h-full w-full object-contain object-center 
            group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-black
          dark:text-gray-400">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-black
          dark:text-white">${product.variants?.[0]?.prices?.[0]?.amount / 100}</p>
      </Link>
    );
}

export default Product;