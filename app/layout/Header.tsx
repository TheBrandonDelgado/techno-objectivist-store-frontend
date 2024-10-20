import CartIcon from "../components/cart/CartIcon";
import Link from "next/link";
const Header = () => {
    return (
        <header className="flex justify-center items-center text-2xl font-bold my-2 w-full">
            <Link href="/"><h1>Techno-Objectivist Store</h1></Link>
            <CartIcon />
        </header>
    )
}

export default Header;