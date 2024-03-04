import { getCollectionsList } from "../../lib/data"
import FeaturedProducts from "../../modules/home/components/featured-products"
import Hero from "../../modules/home/components/hero"
import SkeletonHomepageProducts from "../../modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const metadata: Metadata = {
  title: "Store Starter Template",
  description:
    "A performant frontend ecommerce build by Setze Softwares.",
}
export const runtime = "edge"
export default async function Home() {
  // const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={3} />}>
        <FeaturedProducts collections={[]} />
      </Suspense>
    </>
  )
}
