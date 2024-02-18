import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


const MainHeader = () => {

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" priority />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
              <NavLink href="/meals">Browse Meals</NavLink>
              <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
