"use client";

import { useState } from "react";
import styles from "./search-bar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form className={styles.forms} action="">
      <IoSearch className={styles.searchIcon} />
      <input
        className={styles.input}
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value)}
        type="text"
        placeholder="Nome de usuário"
      />
    </form>
  );
}
