import {
  retroPCsImage,
  gamingGrowthImage,
  topLaptopsImage,
} from "@/public/images/articles";

import Image from "next/image";
import Link from "next/link";

const trendingNewsAPIResponse = [
  {
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: retroPCsImage,
    url: "",
  },
  {
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: topLaptopsImage,
    url: "",
  },
  {
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: gamingGrowthImage,
    url: "",
  },
];

const oneArticle = (article, index) => {
  return (
    <div>
      <Image src={article.image} alt="" />
      <p>{index + 1}</p>

      <p>
        <Link href={article.url}>{article.title}</Link>
      </p>

      <p>{article.description}</p>
    </div>
  );
};

const TrendingNews = () => {
  return (
    <div>
      {trendingNewsAPIResponse.map((article, index) =>
        oneArticle(article, index)
      )}
    </div>
  );
};

export default TrendingNews;
