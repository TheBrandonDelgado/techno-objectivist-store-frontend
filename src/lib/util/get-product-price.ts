import { HttpTypes } from "@medusajs/types"
import { getPercentageDiff } from "./get-precentage-diff"
import { convertToLocale } from "./money"

export const getPricesForVariant = (variant: any) => {
  if (!variant?.prices?.[0]?.amount) {
    return null
  }

  return {
    calculated_price_number: `$${variant.prices[0].amount / 100}`,
    calculated_price: `$${convertToLocale({
      amount: variant.prices[0].amount / 100,
      currency_code: variant.prices.currency_code,
    })}`,
    original_price_number: `$${variant.original_price / 100}`,
    original_price: `$${convertToLocale({
      amount: variant.original_price / 100,
      currency_code: variant.prices[0].currency_code,
    })}`,
    currency_code: variant.prices[0].currency_code,
    price_type: variant.prices[0].price_list,
    percentage_diff: getPercentageDiff(
      variant.original_price / 100,
      variant.prices[0].amount / 100
    ),
  }
}

export function getProductPrice({
  product,
  variantId,
}: {
  product: HttpTypes.StoreProduct
  variantId?: string
}) {
  if (!product || !product.id) {
    throw new Error("No product provided")
  }

  const cheapestPrice = () => {
    if (!product || !product.variants?.length) {
      return null
    }

    const cheapestVariant: any = product.variants
      .filter((v: any) => !!v.calculated_price)
      .sort((a: any, b: any) => {
        return (
          a.prices.amount - b.prices.amount
        )
      })[0]

    return getPricesForVariant(cheapestVariant)
  }

  const variantPrice = () => {
    if (!product || !variantId) {
      return null
    }

    const variant: any = product.variants?.find(
      (v) => v.id === variantId || v.sku === variantId
    )

    if (!variant) {
      return null
    }

    return getPricesForVariant(variant)
  }

  return {
    product,
    cheapestPrice: cheapestPrice(),
    variantPrice: variantPrice(),
  }
}
