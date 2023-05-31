import Image from "next/image";
import Link from "next/link";

const newestNewsAPIResponse = [
  {
    title: "New Hydrogen VS Electric Cars",
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
    <div>
      <Link href={article.url}>
        <p>{article.title}</p>
      </Link>
      <span>{article.description}</span>
    </div>
  );
};

const NewestNews = () => {
  return (
    <div className="newest-news">
      {newestNewsAPIResponse.map((article) => oneArticle(article))}
    </div>
  );
};

export default NewestNews;
