import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/Provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (

    <html className={`${poppins.className}`}>
      <body className="">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>

  );
};
export default RootLayout;
