'use client'

import Products from "./components/products/Products";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <MedusaProvider 
      baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || ''} 
      queryClientProviderProps={{ client: queryClient }}
      publishableApiKey={process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY || ''}
    >
      <div className="flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Products />
        </main>
      </div>
    </MedusaProvider>
  );
}
