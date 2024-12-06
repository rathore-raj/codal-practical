import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import AppContextProvider from "@/components/providers/app-context";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Products",
  description:
    "Products listing with filter, sorting , pagination also with responsive design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-primary`}>
        <AppContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
