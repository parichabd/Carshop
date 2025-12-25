import Link from "next/link";
import { useState } from "react";

import styles from "./Layout.module.css";
import { CiLogin } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const image = "./stylish-concept-sport-car-silhouette-black-background_684457-136.avif";

function Layout({ children }) {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img
              src={image}
              alt="BotoCar Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.links}>
            <button
              onClick={showHandler}
              className={`${styles.btnPrimary} ${show ? styles.active : ""}`}
            >
              Page <IoMdArrowDropdown />
            </button>
            <ul className={`${styles.menu} ${show ? styles.show : ""}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <div className={styles.login}>
              <CiLogin />
              <span>Login</span>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Next.js CarHub Project &copy;</footer>
    </>
  );
}

export default Layout;
