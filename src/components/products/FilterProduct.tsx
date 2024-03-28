
export default function FilterProduct() {
  return (
    <div>
        <div className='border border-1 w-76 p-2'> 
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
       {/* categori */}
         <div className='border border-1 w-76 p-2 mt-8'> 
        <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Categories</span>  </h2> 
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>Dishwashing</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>Cleaning-Accessories</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>Pest Control</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>Laundry Products</p>
        </div>
       </div> 
       {/* ratings */}
        <div className='border border-1 w-76 p-2 mt-8'> 
        <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Ratings</span>  </h2> 
        <div className="flex items-center justify-start gap-3 py-2 mx-6">
        <input type="checkbox" className="checkbox" />
            <p>1 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>2 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>3 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>4 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6 gap-3 py-2">
        <input type="checkbox" className="checkbox" />
            <p>5 Star</p>
        </div>
       </div> 
    </div>
  )
}
