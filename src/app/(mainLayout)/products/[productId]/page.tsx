import Image from 'next/image'
import heart from '../../../../image/icon/heart.svg'
import star from '../../../../image/icon/star.svg'
import item from '../../../../image/homeImg/slider1.jpg'

export default async function ProductDetailsPage({ params }) {

    const res = await fetch(`http://localhost:5000/products/${params.productId}`, {
        next: {
            revalidate: 30
        }
    })
    const product = await res.json()
    //console.log(product.image);
    

    return (
        <div className='max-w-[1250px] mx-auto py-20'>
            <div className="flex flex-wrap gap-10">
                <div className="">
                    <Image src={product?.image} width={500} height={400}  alt='star' className='h-[400px]' />
                </div>
                <div className="max-w-[600px]">
                    <div className="flex justify-between">
                        <h2 className='text-xl font-semibold py-6'>{product.title}</h2>
                        <Image src={heart} width={30} alt='heart' />
                    </div>
                    <div className="flex items-center">
                        <p className='font-semibold'>${product.price} | </p>
                        <div className="flex mx-4">
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />
                            <p className="mx-2">(30 views)</p>
                        </div>
                    </div>
                    <hr className='mt-4 py-4' />
                    <p>{product.description.slice(0, 122)}</p>
                    <p className='font-semibold py-2'>Categori: {product.category}</p>
                    <div className="">
                        <div className="py-6 text-gray-700">
                            <p>Free worldwide shiping on all order over $100</p>
                            <p className='py-2'>Delivary in: 3-7 working days shiping & return</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button className='p-2 bg-gray-600 text-white '>Add To Card</button>
                    </div>
                </div>
            </div>
            <p className='py-12'>
                {product.description}
            </p>
        </div>
    )
}
