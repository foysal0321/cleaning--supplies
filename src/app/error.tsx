'use client'


export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="text-center">
           
            <h2> Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}