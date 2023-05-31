import "@/styles/main.css";

import { MainNews, NewestNews, TrendingNews } from "@/components";

export const metadata = {
  title: "Frontend Mentor | News homepage",
};

export default function Home() {
  return (
    <main className="main-layout">
      <MainNews />
      <NewestNews />
      <TrendingNews />
    </main>
  );
}
