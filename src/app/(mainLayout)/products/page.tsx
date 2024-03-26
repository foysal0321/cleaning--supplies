import FilterProduct from "@/components/products/FilterProduct"
import ProductCard from "@/components/products/ProductCard"

export default async function ProductsPage () {

  const res = await fetch(`http://localhost:5000/products`,{
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()


  return (

    <div className="max-w-[1240px] mx-auto py-24 flex flex-wrap gap-6">
      <div className='w-[300px]'>
        <FilterProduct />
      </div>
      <div className=" max-w-[900px]">
        <h2 className='text-3xl font-semibold'>Our Collection Of Products </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
        {
          products.map((product: any) => 
            <ProductCard key={product.id} product={product} />
          )
        }
        </div>
        <button className="p-3 bg-gray-800 text-white text-center">Load More </ button>
      </div>
    </div>

  )
}
