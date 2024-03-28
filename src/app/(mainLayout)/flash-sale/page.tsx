import Image from "next/image";
import Link from "next/link";
import SaleTime from "@/components/home/flash-sale/SaleTime";


export default async function FlashSalePahe() {

  const res = await fetch(`https://cleaning-supplies.vercel.app/products`, {
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()
  
  const flashSales = products.filter(
    (product: any) => product.flashSale === true
  );

  return (
    <div className="max-w-[1250px] mx-auto py-24 p-5">
      <div className="flex justify-between flex-wrap">
        <h2 className='text-3xl font-semibold py-6'>Flash Sale </h2>
        <SaleTime />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {
          flashSales?.map((data: any) => (
            <div key={data._id} className=' h-[400px] w-[300px] border border-gray-200 '>
              <h5 className="absolute z-30 text-white font-semibold text-xl bg-gray-800">-15% </h5>
              <Image src={data.image} alt='flash' width={300} height={300} className='relative z-10 h-[270px]' />
              <h2 className=" font-semibold py-2 p-3">{data.title}</h2>
              <div className='flex justify-between py-5 p-3 items-center text-gray-600'>
                <h6 className='text-semibold'>${data.price}</h6>
                <Link href={`products/${data._id}`} className='p-1 px-2 font-semibold bg-gray-100 rounded-full' >Buy Now</Link>
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-56 mx-auto py-10'>
        <button className="p-3 bg-gray-800 text-white">Load More </ button>
      </div>
    </div>
  )
}
