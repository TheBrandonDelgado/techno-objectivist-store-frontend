import { useCreateCart } from "medusa-react"

const Cart = () => {
  const createCart = useCreateCart()
  const handleClick = () => {
    createCart.mutate({}) // create an empty cart
  }

  return (
    <div>
      {createCart.isLoading && <div>Loading...</div>}
      {!createCart.data?.cart && (
        <button onClick={handleClick}>
          Create cart
        </button>
      )}
      {createCart.data?.cart?.id && (
        <div>Cart ID: {createCart.data?.cart.id}</div>
      )}
    </div>
  )
}

export default Cart