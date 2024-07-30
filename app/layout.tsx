import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahara Engineering Works",
  description:
    "SAHARA ENGINEERING WORKS is peoples company which are into CONSTRUCTION AND INTERIORS services.SAHARA means to serve (sahara-helping hand) the people with best quality of work in less budget.Sahara will never compromise with the quality of work as our Engineers integrity wont allow to do so,we take construction and interiors projects ranging from (20 lacs - 3 crore).We have 25+ Manpower and we handle 4+ projects at a time.Sahara is Located at Margao Goa and we take work geographical in Goa location We are contracting services company for residential and commercial buildings.We makes your dream house looks beautiful. sahara undertakes civil construction , Electrical ,Plumbing , Flooring , False ceiling , Fabrication ,Furniture, painting work",
};
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
