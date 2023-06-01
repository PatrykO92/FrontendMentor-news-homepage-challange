"use client";
import styles from "@/styles/Nav.module.css";
import logo from "@/public/logo.svg";
import { menuIcon, closeMenuIcon } from "@/public/images/icons";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen((preVal) => !preVal);
    if (!isMobileMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.menu}>
        <Image src={logo} alt="logo" />
        <div className={styles.desktop}>
          <Link href="/">Home</Link>
          <Link href="/">New</Link>
          <Link href="/">Popular</Link>
          <Link href="/">Trending</Link>
          <Link href="/">Categories</Link>
        </div>
        <button className={styles.mobile_hamburger} onClick={handleMenuClick}>
          <Image src={menuIcon} alt="mobile menu" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className={styles.mobile_background}
            onClick={handleMenuClick}
          ></div>
          <div className={styles.mobile}>
            <button
              className={styles.mobile_hamburger}
              onClick={handleMenuClick}
            >
              <Image src={closeMenuIcon} alt="close mobile menu" />
            </button>
            <div className={styles.mobile_links}>
              <Link href="/">Home</Link>
              <Link href="/">New</Link>
              <Link href="/">Popular</Link>
              <Link href="/">Trending</Link>
              <Link href="/">Categories</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
