import { useMeCustomer, useMedusa } from "medusa-react"

const CustomerLogin = () => {
  const { client } = useMedusa()
  const { refetch: refetchCustomer } = useMeCustomer()
  // ...

  const handleLogin = (
    email: string,
    password: string
  ) => {
    client.auth.authenticate({
      email,
      password,
    })
    .then(() => {
      // customer is logged-in successfully
      // send authenticated requests now
      refetchCustomer()
    })
    .catch(() => {
      // an error occurred.
    })
  }

  // ...
}

export default CustomerLogin;