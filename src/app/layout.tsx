// REACT & NEXT
import type { Metadata } from "next"
// ASSETS
import "../../public/globals.css"

// METADATA
export const metadata: Metadata = {
  title: "Blog",
  description: "Created by Alparslan",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}