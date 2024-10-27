import { notFound } from 'next/navigation';
import medusaClient from '../../lib/medusa-client';
import ProductOptions from '../../components/products/ProductOptions';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const { handle } = params;
  const { products } = await medusaClient.products.list({ handle: handle });
  const product = products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col gap-4">
          {product.images?.reverse().map(image => (
            <img
                src={image.url}
                alt={product.title || 'Product Image'}
                width={500}
                height={500}
                className="rounded-lg"
                key={image.id}
            />
          ))}
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 sticky top-0 self-start">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-xl mb-4">${product.variants[0].prices[0].amount / 100}</p>
          <p className="mb-4">{product.description}</p>
          <ProductOptions product={product} />
        </div>
      </div>
    </div>
  );
}