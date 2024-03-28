"use client"

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function FilterProduct({ products }: { products: any }) {
    const [filterProduct, setFilterProduct] = useState(products)
    //

    const handleChange = (e: any) => {
        const categori = e.target.value
        let filtered;

        switch (categori) {
            case 'Dishwashing':
                filtered = products.filter(
                    (product: any) => product.category === "Dishwashing"
                );
                break;
            case 'Cleaning-Accessories':
                filtered = products.filter(
                    (product: any) => product.category === "Cleaning-Accessories"
                );
                break;
            case 'pest-control':
                filtered = products.filter(
                    (product: any) => product.category === "pest-control"
                );
                break;
            case 'Laundry':
                filtered = products.filter(
                    (product: any) => product.category === "Laundry"
                );
                break;


            default:
                filtered = products;
        }
        setFilterProduct(filtered)
    }

    return (
        <div className="max-w-[1250px] mx-auto flex flex-wrap gap-6 p-4">
            <div className='max-w-[300px] mx-auto'>

                <div className='border border-1 w-76 p-2 mt-8 py-4'>
                    <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Categories</span>  </h2>
                    <select onChange={handleChange} className="select w-full max-w-xs text-lg">
                        <option value=''>All Products</option>
                        <option value='Dishwashing'>Dishwashing</option>
                        <option value='Cleaning-Accessories'>Cleaning Accessories</option>
                        <option value='pest-control'>Pest Control</option>
                        <option value='Laundry'>Laundry</option>
                    </select>
                </div>

                <div className='border border-1 w-76 p-2 mt-6'>
                    <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Price Range</span>  </h2>
                    <div className="flex items-center justify-start mx-6 gap-3 py-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>$0.00 - $10.00</p>
                    </div>
                    <div className="flex items-center justify-start mx-6 gap-3 py-2">
                        <input type="checkbox" className="checkbox" />
                        <p>$10.00 - $20.00</p>
                    </div>
                    <div className="flex items-center justify-start mx-6 gap-3 py-2">
                        <input type="checkbox" className="checkbox" />
                        <p>$20.00 - $50.00</p>
                    </div>
                    <div className="flex items-center justify-start mx-6 gap-3 py-2">
                        <input type="checkbox" className="checkbox" />
                        <p>$50.00 - $100.00</p>
                    </div>
                </div>           
            </div>
            <div className=" max-w-[900px] mx-auto">
                <h2 className='text-3xl font-semibold'>Our Collection Of Products </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
                    {
                        filterProduct.map((product: any) =>
                            <ProductCard key={product.id} product={product} />
                        )
                    }
                </div>
                <button className="p-3 bg-gray-800 text-white text-center">Load More </ button>
            </div>
        </div>
    )
}
