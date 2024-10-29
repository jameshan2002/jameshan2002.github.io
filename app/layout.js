import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "James Han Portfolio",
  description: "James Han's personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="photo/profile-emoji.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <nav className="bg-white shadow-sm p-6">
          <div className="max-w-4xl mx-auto flex gap-6">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-lg mr-4"
            >
              James Han
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-lg"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-lg"
            >
              Blog
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
