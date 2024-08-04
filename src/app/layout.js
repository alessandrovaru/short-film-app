import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Catarsis || Cortometraje",
  description: "Un cortometraje dirigido y escrito por Verónica Guillén y producido por Adriana Zerpa",
  generator: "Alessandro Varuzza",
  applicationName: "Catarsis || Short Film Portfolio",
  referrer: 'origin-when-cross-origin',
  keywords: "Catarsis, short film, cortometraje, Verónica Guillén, Adriana Zerpa, Venezuela, Caracas, cine, film, short, film, portfolio,",
  creator: "Alessandro Varuzza",
  publisher: "Alessandro Varuzza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Catarsis || Cortometraje",
    description: "Un cortometraje dirigido y escrito por Verónica Guillén y producido por Adriana Zerpa",
    url: "https://short-film-app.vercel.app/",
    siteName: "Catarsis",
    locale: 'en_US',
    type: 'website',
  },
};

// config your font
const microgramma = localFont({
  src: "../../public/fonts/micro.otf",
  variable: "--microgramma-font",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/images/favicons/favicon.ico" sizes="any" />

      </head>
      <body className={`${inter.className} ${microgramma.variable}`}>{children}</body>
    </html>
  );
}
