import { Text } from "@medusajs/ui"
import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="txt-compact-small">
            My Store. All rights reserved © {new Date().getFullYear()}.
          </Text>
  )
}

export default MedusaCTA
