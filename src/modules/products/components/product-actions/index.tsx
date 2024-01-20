import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import React, { useMemo } from "react"

type ProductActionsProps = {
  product: PricedProduct,
  setVariant : React.Dispatch<React.SetStateAction<string>>
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product,setVariant }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions();

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price;
    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        {product.variants.length > 1 && (
          <div className="flex flex-col gap-y-4">
            {(product.options || []).map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                    setVariant = {setVariant}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}
      </div>
      {selectedPrice ? (
        <div className="flex flex-col text-ui-fg-base">
          <span
            className={clsx("text-xl-semi", {
              "text-ui-fg-interactive ": selectedPrice.price_type === "sale",
            })}
            
          >
            {selectedPrice.calculated_price?.replace('DZD',' د.ج')}
          </span>
          {selectedPrice.price_type === "sale" && (
            <>
              <p>
                <span className="text-ui-fg-subtle">السعر الأصلي: </span>
                <span className="line-through">
                  {selectedPrice.original_price?.replace('DZD','د.ج ')}
                </span>
              </p>
              <span className="text-ui-fg-interactive font-bold">
                -{selectedPrice.percentage_diff}%
              </span>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}


    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, setVariant }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} setVariant={setVariant} />
  </ProductProvider>
)

export default ProductActions
