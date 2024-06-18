import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Catarsis",
  description: "Un cortometraje escrito y dirigido por Verónica Guillén",
};

// config your font
const microgramma = localFont({
  src: "../../public/fonts/micro.otf",
  variable: "--microgramma-font",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${microgramma.variable}`}>{children}</body>
    </html>
  );
}
