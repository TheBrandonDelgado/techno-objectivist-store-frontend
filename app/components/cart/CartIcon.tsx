'use client'

import { PiHandbagSimple } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useCart } from "medusa-react";

const CartIcon = () => {
    // const { cart, createCart } = useCart();
    const [cartCount, setCartCount] = useState(5);

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
        <div className="absolute right-6 flex justify-center items-center cursor-pointer">
            <PiHandbagSimple className='text-3xl absolute top-[-0.5rem] right-[-0.5rem]' />
            {cartCount > 0 && <span className="relative text-black text-xs flex right-[0.25rem]">{cartCount}</span>}
        </div>
    )
}

export default CartIcon;