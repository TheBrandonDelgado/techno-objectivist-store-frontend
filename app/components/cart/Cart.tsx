import { useCart } from "medusa-react"

const Cart = () => {
  const { cart, createCart } = useCart()

  const handleCreateCart = () => {
    createCart.mutate(
      {}, // create an empty cart
      {
        onSuccess: ({ cart }) => {
          localStorage.setItem("cart_id", cart.id)
        },
      }
    )
  }
  
  // ...
}

export default Cart