'use client';

import { useState } from 'react';

const ProductOptions = ({ product }: any) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))} 
                className="w-16 text-center text-black"
            />
        </div>
    );
}

export default ProductOptions;