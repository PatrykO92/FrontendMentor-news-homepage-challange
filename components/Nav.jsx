import "@/styles/nav.css";
import logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Image src={logo} alt="logo" width={30} height={30} />
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
