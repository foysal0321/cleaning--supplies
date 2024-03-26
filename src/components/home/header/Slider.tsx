"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image';
import Slider1 from '../../../image/homeImg/slider1.jpg'
import Slider2 from '../../../image/homeImg/slider2.jpg'
import Slider3 from '../../../image/homeImg/House-Cleaning-Service.jpg'

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[ Navigation]}
        breakpoints={{
          0: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 40
          },
      }}
        className="mySwiper max-w-[990px]"
      >
        <SwiperSlide>
          <div className="w-[300px]">
           <Image src={Slider1} className='h-[300px]' alt="slider" />
           <h3 className='py-2 font-semibold'>Hand Socks</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
           <Image src={Slider3} className='h-[300px]' alt="slider" />
           <h3> Hand Socks</h3>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
           <Image src={Slider2} className='h-[300px]' alt="slider" />
           <h3> Hand Socks</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
           <Image src={Slider2} className='h-[300px]' alt="slider" />
           <h3> Hand Socks</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
           <Image src={Slider2} className='h-[300px]' alt="slider" />
           <h3> Hand Socks</h3>
          </div>
        </SwiperSlide>
       
        

      </Swiper>
    </>
  );
}