import { MainNews, NewestNews, TrendingNews } from "@/components";

import styles from "@/styles/Homepage.module.css";

export const metadata = {
  title: "Frontend Mentor | News homepage",
};

export default function Home() {
  return (
    <main className={styles.layout}>
      <div className={styles.main}>
        <MainNews />
      </div>
      <div className={styles.newest}>
        <NewestNews />
      </div>
      <div className={styles.trending}>
        <TrendingNews />
      </div>
    </main>
  );
}
