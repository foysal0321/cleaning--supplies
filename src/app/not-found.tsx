
import Link from "next/link";

export default function NotFoundPage () {
    return (
        <div>        
            <h2>404 || Page Not Found</h2>
            <Link className="underline" href="/">Return Home</Link>
        </div>
    )
}
