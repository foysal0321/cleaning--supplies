import FilterProduct from "@/components/products/FilterProduct"
import ProductCard from "@/components/products/ProductCard"

export default async function ProductsPage() {

  const res = await fetch(`https://cleaning-supplies.vercel.app/products`, {
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()


  return (

    <div className="">
         <FilterProduct products={products} />   
    </div>

  )
}
