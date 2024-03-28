import Image from "next/image"

export default async function page() {
    const res = await fetch(`https://cleaning-supplies.vercel.app/products`, {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Ratings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p: any) => (
                                <tr key={p._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={p.image} width={70} height={50} alt="item" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{p.title}</div>
                                                <div className="text-sm opacity-50">{p.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{p.price}</td>
                                    <td>{p.ratings}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
