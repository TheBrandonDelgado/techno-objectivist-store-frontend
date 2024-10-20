'use client'

import { PiHandbagSimple } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useCart } from "medusa-react";

const CartIcon = () => {
    // const { cart, createCart } = useCart();
    const [cartCount, setCartCount] = useState(0);

    // const handleCreateCart = () => {
    //     createCart.mutate({}, {
    //         onSuccess: ({ cart }) => {
    //             localStorage.setItem("cart_id", cart.id);
    //         }
    //     });
    // }

    // useEffect(() => {
    //     if (!cart) handleCreateCart();
    //     else setCartCount(cart.items.length);
    //     console.log(cart);
    // }, [cart]);

    return (
        <div className="absolute right-8 flex justify-center items-center cursor-pointer w-8">
            <PiHandbagSimple className='text-3xl absolute top-[-0.5rem]' />
            {cartCount > 0 && <span className="text-black text-xs dark:text-white mx-auto">{cartCount}</span>}
        </div>
    )
}

export default CartIcon;