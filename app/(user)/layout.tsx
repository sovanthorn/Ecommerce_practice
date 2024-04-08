
import Navbarss from "@/Components/css-nav-bar/Navbarss";
import Footer from "@/Components/footer/FooterComponent";
import "@/app/globals.css";

import AppProvider from "@/util/AppProvider";
import { Metadata } from "next";

export const matadata : Metadata = {
	title: "My Ecommerce Website",
	description:"My Ecommerce Wesite for selling my luxurybag.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/Hot-to-tell-if-a-gucci-bag-is-real-scaled.jpg",
	},
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between">
        {/* <AppProvider> */}
			<header>
				<Navbarss/>
        
			</header>
     <main>{children}</main>
          
<footer><Footer/></footer>
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
