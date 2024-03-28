import Image from 'next/image';
import Link from 'next/link';

type TProduct = {
  title: string
  image: string
  price: string | number
  ratings: number
  description: string,
  _id: string,
  category: string
}

export default function ProductCard ({product}: {product: TProduct}) {
    const {title, image, description, price, ratings, _id, category} = product

  return (
  <Link href={`/products/${_id}`}>
    <div key={_id} className=' h-[400px] w-[300px] border border-gray-200 '>
     
    <h5 className="absolute z-30 text-white font-semibold text-xl bg-gray-800">-15% </h5>
     
   <Image src={image} alt='flash' width={300} height={300} className='relative z-10 h-[270px]' />
   <h2 className=" font-semibold py-2 p-3">{title}</h2>
   <div className='flex justify-between py-5 p-3 items-center text-gray-600'>
     <h6 className='text-semibold'>${price}</h6>
   <button className='p-1 px-2 font-semibold bg-gray-100 rounded-full' >Buy Now</button>
 
   </div>
   
</div>
  </Link>
  );
}