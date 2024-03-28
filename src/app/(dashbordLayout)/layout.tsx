import { Navbars } from "@/components/shared/navbar/Navbars"
import Link from "next/link"

export default function layout({children}: {children: any}) {
  return (
    <div>
        <Navbars />
     <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {children}
    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

      <li>
        <Link href='dashboard/all-products'>All Products</Link>
        </li>
      <li>
        <Link href='#'>Create Product</Link>
        </li>
    </ul>
  
  </div>
</div>
    </div>
  )
}
