import HamburgerIcon from "@/components/HamburgerIcon";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "LWS Blogify | Learn with Sumit Assignment",
  description: "Blog assignment with local JSON SSR rendering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 ">
        <header className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={148}
                height={48}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get started
              </Link>
            </nav>
            <button className="md:hidden">
              <HamburgerIcon />
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
