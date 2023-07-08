import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Danton Parfums",
  description: "Signature Parfums at a fraction of it's Cost!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black p-10">
      <body>{children}</body>
    </html>
  );
}
