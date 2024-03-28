import Image from 'next/image'
import dishwashing from '../../../image/homeImg/dishwashing1.jpg'
import dishwashing2 from '../../../image/homeImg/cleaning2.jpg'
import dishwashing3 from '../../../image/homeImg/paper.jpg'
import dishwashing4 from '../../../image/homeImg/1521205283588.jpeg'
import Link from 'next/link'

export default async function Categoris() {
  const res = await fetch(`https://cleaning-supplies.vercel.app/products`, {
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()

  return (
    <div className="max-w-[1250px] mx-auto py-24">
      <div className="text-center py-8">
        <h1 className="text-3xl font-semibold py-4">Categories</h1>
        <p>Our cleaning experts deliver the highest quality of clean  you can always count,</p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products?.slice(0, 4).map((p: any) => (
            <div key={p._id} className='h-[350px] border border-gray-200 w-[300px]'>
              <Link href={`/products?category=${encodeURIComponent(
                p.category
              )}`}>
                <Image src={p.image} width={300} height={280} className='h-[280px]' alt='categori' />
                <p className='py-4 font-semibold text-center text-xl'>{p.category}</p>
              </Link>
            </div>
          ))}


        </div>
      </div>

    </div>
  )
}
