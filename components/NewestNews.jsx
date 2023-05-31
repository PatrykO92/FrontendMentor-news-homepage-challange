import styles from "@/styles/NewestNews.module.css";

import Link from "next/link";

const newestNewsAPIResponse = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    url: "",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
    url: "",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    url: "",
  },
];

const oneArticle = (article) => {
  return (
    <div className={styles.article}>
      <Link href={article.url}>
        <p>{article.title}</p>
      </Link>
      <span>{article.description}</span>
    </div>
  );
};

const NewestNews = () => {
  return (
    <div className={styles.news_box}>
      <p>New</p>
      {newestNewsAPIResponse.map((article) => oneArticle(article))}
    </div>
  );
};

export default NewestNews;
