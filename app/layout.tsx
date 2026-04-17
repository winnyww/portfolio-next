import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import PageTransition from "@/components/PageTransition"

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Winny Wang — Designer",
  description:
    "Portfolio of Winny Wang, a 0 → 1 product designer crafting clean, delightful user experiences.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  )
}
