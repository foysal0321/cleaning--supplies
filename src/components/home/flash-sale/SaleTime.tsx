"use client"

import { useEffect, useState } from "react";

export default function SaleTime() {

    const endTimeCalculate = () => {
        const now = new Date();
        const endTime = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
        return endTime;
      };
          
    
      const [endTime, setEndTime] = useState(endTimeCalculate());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setEndTime(endTimeCalculate());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const formatTime = (endTime: Date) => {
        const diff = endTime.getTime() - new Date().getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
      };

  return (
    <div className="flex-wrap flex items-center py-10">
    {/* {endTime && (
      <span className="text-xl font-semibold">
        Ends ofter:
        <span className="ml-2 text-2xl bg-[#e7e6e6] px-3 py-1 rounded-sm">
          {formatTime(endTime).days}d   
        </span>
        <span className="ml-2 lg:ml-3 text-2xl bg-[#e7e6e6] px-3 py-1 rounded-sm">
        {formatTime(endTime).hours}h
        </span>
        <span className="ml-2 lg:ml-3 text-2xl bg-[#e7e6e6]  px-3 py-1 rounded-sm">
        {formatTime(endTime).minutes}m
        </span>
        <span className="ml-2 lg:ml-3 text-2xl bg-[#e7e6e6] px-3 py-1 rounded-sm">
        {formatTime(endTime).seconds}s
        </span>

      </span>
    )}
    */}
  </div>
  )
}
