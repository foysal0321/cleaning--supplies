import star from '../../image/icon/star.svg'
import Image from 'next/image'

export default function RatingIcons() {
  return (
         <div className="flex mx-4">
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />
                            <Image src={star} width={20} alt='star' />

                        </div>
  )
}
