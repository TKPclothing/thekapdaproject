import Header from "@/components/client/Header";
import "@/app/scss/client/globals.scss";
import Footer from "@/components/client/Footer";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "The Kapda Project",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="bodyTop">
        <Providers>
          <ToastContainer />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}