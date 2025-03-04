"use client";
import { useEffect } from "react";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import Lenis from "lenis";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplashCursor from "./ui/SplashCursor";
import { Toaster } from "react-hot-toast";

// TODO: Remove Swiper

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      gestureOrientation: "both",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  return (
    <html lang="en">
      <head>
        <title>Techshala | VP | Technical Committee</title>
        <meta name="title" content="Techshala | VP | Technical Committee" />
        <meta name="description" content="Techshala is a technical committee of Vidyalankar Polytechnic College, Mumbai. It is a platform for students to learn and grow in the field of technology." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techshala.vpt.edu.in/" />
        <meta property="og:title" content="Techshala | VP | Technical Committee" />
        <meta property="og:description" content="Techshala is a technical committee of Vidyalankar Polytechnic College, Mumbai. It is a platform for students to learn and grow in the field of technology." />
        <meta property="og:image" content="https://hetref.github.io/techshala-assets/meta_cover_image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://techshala.vpt.edu.in/" />
        <meta property="twitter:title" content="Techshala | VP | Technical Committee" />
        <meta property="twitter:description" content="Techshala is a technical committee of Vidyalankar Polytechnic College, Mumbai. It is a platform for students to learn and grow in the field of technology." />
        <meta property="twitter:image" content="https://hetref.github.io/techshala-assets/meta_cover_image.png" />

        <meta
          name="keywords"
          content="Techshala, Vidyalankar Polytechnic College, Technical Committee, Students, Technology, Learning, Growth"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Yash Nimse, Aryan Shinde" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-video-preview:large"
        />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Toaster position="bottom-right" />
        <Header />
        {/* <CustomCursor /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
