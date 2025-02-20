"use client"

export default function ShowErrorComponent({ error, errorDetails } : {error: string, errorDetails: string}) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error</strong>
            <span className="block sm:inline">{error}</span>
            <span className="block sm:inline">{errorDetails}</span>
        </div>
    )
}