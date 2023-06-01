"use client";

import { web3DesktopImage, web3MobileImage } from "@/public/images/articles";
const mainNewAPIResponse = {
  title: "The Bright Future of Web 3.0?",
  description:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  imgDesktop: web3DesktopImage,
  imgMobile: web3MobileImage,
  imgAlt: "",
  url: "",
};

import styles from "@/styles/MainNews.module.css";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const MainNews = () => {
  const [imageSrc, setImageSrc] = useState("imgDesktop");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 400) {
        setImageSrc("imgMobile");
      } else {
        setImageSrc("imgDesktop");
      }
    };

    handleResize(); // Set initial image source

    window.addEventListener("resize", handleResize); // Update image source on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <div className={styles.main_news_box}>
      <Image
        priority={true}
        src={mainNewAPIResponse[imageSrc]}
        alt={mainNewAPIResponse.imgAlt}
        className={styles.image}
      />
      <h1 className={styles.title}>{mainNewAPIResponse.title}</h1>
      <div className={styles.description}>
        <p>{mainNewAPIResponse.description}</p>
        <button>
          <Link href={mainNewAPIResponse.url}>READ MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default MainNews;
