import Products from "@/components/home/MostProducts/Products";
import Categoris from "@/components/home/categori/Categoris";
import FlashSale from "@/components/home/flash-sale/FlashSale";
import HeroSection from "@/components/home/header/HeroSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FlashSale />
      <Categoris />
      <Products />

    </div>
  );
}
