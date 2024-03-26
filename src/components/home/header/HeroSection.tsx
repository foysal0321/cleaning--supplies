import Image from "next/image";
import Banner from '../../../image/homeImg/House-Cleaning-Service.jpg'
import Slider from "./Slider";


export default function HeroSection() {
  return (
    <div>
      <div className='bg-neutral-700'>

        <div className="text-white p-16 text-center">
          <h1 className="md:text-5xl text-3xl mt-8 font-bold">Providing Quality Janitorial &  <br />Cleaning Services For People.</h1>
          <p className="text-lg py-6">Our cleaning experts deliver the highest quality of clean you can always <br /> count, Let us help you with all of your cleaninig and disinfecting <br /> responsibilities now.</p>
          <div className="py-8">
               <Slider />
          </div>      
        </div>
      </div>
    </div>
  )
}
