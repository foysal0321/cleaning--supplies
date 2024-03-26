import RatingIcons from '@/components/ui/RatingIcons'
import Image from 'next/image'
import Link from 'next/link'


export default async function Products() {

  const res = await fetch(`http://localhost:5000/products`,{
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()

  return (
    <div>
         <div className="max-w-[1200px] mx-auto py-24">
         <div className="flex justify-between flex-wrap">
            <h2 className='text-3xl font-semibold'>Most Popular Products</h2>
            <Link href='/products'>
            <button className="p-3 bg-gray-800 text-white ">View All </ button></Link>
        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {
              products?.map((data: any) => (
                <div key={data._id} className=' h-[410px] border border-gray-200 '>              
                <Image src={data.image} alt='flash' width={300} height={300} className='relative z-10 h-[270px]' />
                <h2 className=" font-semibold py-2 p-3">{data.title}</h2>
                <div className="flex text-gray-600 mt-2">
                  <RatingIcons />
                  <p>4.1</p>
                  </div>
                <div className='flex justify-between py-5 p-3 items-center text-gray-600'>
                  <h6 className='font-semibold'>${data.price}</h6>
                <Link href='/flash-sale' className='p-1 px-2 font-semibold bg-gray-100 rounded-full' >Buy Now</Link>
                </div>
                
            </div>
              ))
            }


            
        </div>
       
    </div>
    </div>
  )
}
