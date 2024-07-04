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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
