import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/search-bar/search-bar";

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={"/github-logo.png"}
          width={100}
          height={100}
          alt="github-logo"
        />
        <h1 className={styles.title}>HUBusca</h1>
      </header>

      <SearchBar />
    </div>
  );
}
