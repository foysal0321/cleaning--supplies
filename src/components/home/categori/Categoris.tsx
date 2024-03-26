import Image from 'next/image'
import dishwashing from '../../../image/homeImg/dishwashing1.jpg'
import dishwashing2 from '../../../image/homeImg/cleaning2.jpg'
import dishwashing3 from '../../../image/homeImg/paper.jpg'
import dishwashing4 from '../../../image/homeImg/1521205283588.jpeg'
import Link from 'next/link'

export default function Categoris() {
  return (
    <div className="max-w-[1250px] mx-auto py-24">
      <div className="text-center py-8">
        <h1 className="text-3xl font-semibold py-4">Categories</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Earum nam alias autem quibusdam! Enim nam vero deserunt fugit repudiandae id.</p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className='h-[350px] border border-gray-200 w-[300px]'>
            <Link href='/products'>
            <Image src={dishwashing} width={300} className='h-[280px]' alt='categori' />
            <p className='py-4 font-semibold text-center text-xl'>Dishwashing</p>
            </Link>
          </div>
          <div className='h-[350px] border border-gray-200 w-[300px]'>
            <Link href='/products'>
            <Image src={dishwashing2} width={300} className='h-[280px]' alt='categori' />
            <p className='py-4 font-semibold text-center text-xl'>Pest Control</p>
            </Link>
          </div>
          <div className='h-[350px] border border-gray-200 w-[300px]'>
            <Link href='/products'>
            <Image src={dishwashing3} width={300} className='h-[280px]' alt='categori' />
            <p className='py-4 font-semibold text-center text-xl'>Napkins & Paper</p>
            </Link>
          </div>
          <div className='h-[350px] border border-gray-200 w-[300px]'>
            <Link href='/products'>
            <Image src={dishwashing4} width={300} className='h-[280px]' alt='categori' />
            <p className='py-4 font-semibold text-center text-xl'>Cleaning Accessories</p>
            </Link>
          </div>
     
        </div>
      </div>
     
    </div>
  )
}
