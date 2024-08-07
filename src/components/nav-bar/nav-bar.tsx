"use client";

import Link from "next/link";
import styles from "./nav-bar.module.css";
import { RiHome3Line } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <Link
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            <RiHome3Line />
          </Link>
          <a className={styles.navLink} href="/historic">
            <TbReportSearch />
          </a>
        </nav>
      </div>
    </div>
  );
}
