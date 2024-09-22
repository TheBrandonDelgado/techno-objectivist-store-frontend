import Medusa from "@medusajs/medusa-js"

const medusaClient = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
  maxRetries: 3,
  customHeaders: {
    "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY,
  }
})

// Function to authenticate a customer
export const loginCustomer = async (email: string, password: string) => {
  try {
    const response = await medusaClient.auth.authenticate({
      email,
      password,
    })
    return response.customer
  } catch (error) {
    console.error("Error logging in customer:", error)
    throw error
  }
}

// Function to get the current authenticated customer
export const getCurrentCustomer = async () => {
  try {
    const { customer } = await medusaClient.customers.retrieve()
    return customer
  } catch (error) {
    console.error("Error retrieving current customer:", error)
    return null
  }
}

export default medusaClient