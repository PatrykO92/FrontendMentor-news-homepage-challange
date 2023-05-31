import logo from "@/public/logo.svg";
import styles from "@/styles/Nav.module.css";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.menu}>
      <Image src={logo} alt="logo" />
      <div>
        <Link href="/">Home</Link>
        <Link href="/">New</Link>
        <Link href="/">Popular</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Categories</Link>
      </div>
    </nav>
  );
};

export default Nav;
