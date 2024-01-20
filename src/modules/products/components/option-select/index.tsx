import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import { useCart } from "medusa-react"
import React from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string,
  setVariant: React.Dispatch<React.SetStateAction<string>>
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title, setVariant
}) => {
  const filteredOptions = option.values.map((v) => ({ value: v.value, variant_id: v.variant_id })).filter(onlyUnique);
  const { updateCart  } = useCart();

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm font-bold">الرجاء إختيار {title}</span>
      <div className="flex flex-wrap justify-between gap-2">
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => {
                updateOption({ [option.id]: v.value })
                setVariant(v.variant_id);
                updateCart.mutate({
                  discounts: [{
                    code: "BESS",
                  }]
                })
              }
              }
              key={v.value}
              className={clsx(
                "border-ui-border-base bg-gray border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                {
                  "bg-black border-lightgray text-white font-bold": v.value === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v.value !== current
                }
              )}
            >
              {v.value}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
