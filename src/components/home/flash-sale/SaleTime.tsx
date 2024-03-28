"use client";

import { useEffect, useState } from "react";

const SaleTime = () => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    let futureDate = new Date();

    futureDate.setDate(currentDate.getDate() + 30);

    const totalRemainingTime = futureDate.getTime() - currentDate.getTime();

    const updateRemainingTime = () => {
      const newRemainingTime =
        totalRemainingTime - (Date.now() - currentDate.getTime());

      if (newRemainingTime <= 0) {
        setRemainingTime("00:00:00:00");
        return;
      }

      const days = Math.floor(newRemainingTime / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (newRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (newRemainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((newRemainingTime % (1000 * 60)) / 1000);

      const formattedRemainingTime = `${days}: ${hours}: ${minutes}: ${seconds}`;

      setRemainingTime(formattedRemainingTime);
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    updateRemainingTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-2xl font-semibold text-center py-6">
      Offer Remains: {remainingTime}{" "}
    </div>
  );
};

export default SaleTime;