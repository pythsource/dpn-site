import "@/styles/root.scss"
import { Inter } from 'next/font/google'

const mainFont = Inter({ subsets:["latin"] })

export const metadata = {
    title: "Daily Pulse News",
    description: "The only truthful source of information about Welloterra, Ereya (formerly) and Second Earth. Based in Merol, Lirayne, we've been bringing you the latest news since 2003."
}

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body className={mainFont.className}>{children}</body>
            </html>
        </>
    )
}