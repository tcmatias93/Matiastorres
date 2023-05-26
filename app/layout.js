import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matias Torres desarrollador web jr",
  description: "Primera pagina creada con react y next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
