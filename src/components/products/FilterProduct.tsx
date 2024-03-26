import { Checkbox } from "@mui/material";

export default function FilterProduct() {
  return (
    <div>
        <div className='border border-1 w-76 p-2'> 
        <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Price Range</span>  </h2> 
        <div className="flex items-center justify-start mx-6">
            <Checkbox defaultChecked />
            <p>$0.00 - $10.00</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox  />
            <p>$10.00 - $20.00</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>$20.00 - $50.00</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>$50.00 - $100.00</p>
        </div>
       </div>
       {/* categori */}
        <div className='border border-1 w-76 p-2 mt-8'> 
        <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Categories</span>  </h2> 
        <div className="flex items-center justify-start mx-6">
            <Checkbox defaultChecked />
            <p>Dishwashing</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox  />
            <p>Cleaning-Accessories</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>Pest Control</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>Laundry Products</p>
        </div>
       </div>
       {/* ratings */}
       <div className='border border-1 w-76 p-2 mt-8'> 
        <h2 className='text-xl font-semibold mx-8 py-3'>| <span className='mx-6'> Ratings</span>  </h2> 
        <div className="flex items-center justify-start mx-6">
            <Checkbox defaultChecked />
            <p>1 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox  />
            <p>2 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>3 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>4 Star</p>
        </div>
        <div className="flex items-center justify-start mx-6">
            <Checkbox />
            <p>5 Star</p>
        </div>
       </div>
    </div>
  )
}
