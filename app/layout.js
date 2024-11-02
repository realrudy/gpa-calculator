import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Classes from "./classes";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700','800']
})

export const metadata = {
  title: "GPA Calculator",
  description: "Calculate GPA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
