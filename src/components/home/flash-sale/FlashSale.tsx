import Image from "next/image";
import Link from "next/link";
//import SaleTime from "./SaleTime";

export default async function FlashSale() {

  const res = await fetch(`https://cleaning-supplies.vercel.app/flash-sale`, {
    next: {
      revalidate: 30
    }
  })
  const flashData = await res.json()

  return (
    <div className="max-w-[1250px] mx-auto py-16 p-6">
      <div className="flex justify-between flex-wrap">
        <h2 className='text-3xl font-semibold'>Flash Sale </h2>
        <Link href='/flash-sale'>
          <button className="p-3 bg-gray-800 text-white ">View All </ button>
        </Link>
      </div>
      {/* <SaleTime /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {
          flashData.slice(0, 4)?.map((data: any) => (
            <div key={data._id} className='w-[300px] h-[400px] mx-auto border border-gray-200 '>
              <h5 className="absolute z-30 text-white font-semibold text-xl bg-gray-800">-15% </h5>
              <Image src={data.image} alt='flash' width={300} height={300} className='relative z-10 h-[270px]' />
              <h2 className=" font-semibold py-2 p-3">{data.title}</h2>
              <div className='flex justify-between py-5 p-3 items-center text-gray-600'>
                <h6 className='text-semibold'>${data.price}</h6>
                <Link href='/flash-sale' className='p-1 px-2 font-semibold bg-gray-100 rounded-full' >Buy Now</Link>
              </div>

            </div>
          ))
        }



      </div>
    </div>
  )
}
