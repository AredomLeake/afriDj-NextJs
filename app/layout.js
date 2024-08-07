import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import { Providers } from './components/Providers';
// import AuthComponent from './components/AuthComponent';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
        {/* <AuthComponent /> */}
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
