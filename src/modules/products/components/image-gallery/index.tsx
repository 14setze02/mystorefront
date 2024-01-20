
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

import Swips from "../carousel/index";



type ImageGalleryProps = {
  images: MedusaImage[]
}

function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="flex items-start relative">
       
      <Swips images = {images} />
    </div>
  )
}

export default ImageGallery
