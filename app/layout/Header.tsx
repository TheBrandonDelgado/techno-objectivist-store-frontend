import CartIcon from "../components/cart/CartIcon";

const Header = () => {
    return (
        <header className="flex justify-center items-center text-2xl font-bold my-2 w-full">
            <h1>Techno-Objectivist Store</h1>
            <CartIcon />
        </header>
    )
}

export default Header;