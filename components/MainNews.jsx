import { web3DesktopImage, web3MobileImage } from "@/public/images/articles";
import "@/styles/mainNews.css";

import Image from "next/image";
import Link from "next/link";

const mainNewAPIResponse = {
  title: "The Bright Future of Web 3.0?",
  description:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  imgDesktop: web3DesktopImage,
  imgMobile: web3MobileImage,
  url: "",
};

const MainNews = () => {
  return (
    <div className="main-news">
      <Image src={mainNewAPIResponse.imgDesktop} width={600} />
      <h1>{mainNewAPIResponse.title}</h1>
      <p>{mainNewAPIResponse.description}</p>
      <button>
        <Link href={mainNewAPIResponse.url}>Read More</Link>
      </button>
    </div>
  );
};

export default MainNews;
