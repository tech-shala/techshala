'use client';
import { useEffect } from 'react';
import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer';
// import Lenis from '@studio-freight/lenis';
import Lenis from 'lenis'
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplashCursor from './ui/SplashCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      gestureOrientation: 'both',
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
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Arino Creative Agency Next JS Template</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        {/* <CustomCursor /> */}
        <SplashCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
