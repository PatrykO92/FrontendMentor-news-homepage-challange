import { web3DesktopImage, web3MobileImage } from "@/public/images/articles";
const mainNewAPIResponse = {
  title: "The Bright Future of Web 3.0?",
  description:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  imgDesktop: web3DesktopImage,
  imgMobile: web3MobileImage,
  url: "",
};

import styles from "@/styles/MainNews.module.css";

import Image from "next/image";
import Link from "next/link";

const MainNews = () => {
  return (
    <div className={styles.main_news_box}>
      <Image
        src={mainNewAPIResponse.imgDesktop}
        alt=""
        className={styles.image}
      />
      <h1 className={styles.title}>{mainNewAPIResponse.title}</h1>
      <div>
        <p>{mainNewAPIResponse.description}</p>
        <button>
          <Link href={mainNewAPIResponse.url}>READ MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default MainNews;
