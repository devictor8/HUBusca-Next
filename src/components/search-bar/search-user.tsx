"use client";

import { FormEvent, useState } from "react";
import styles from "./search-bar.module.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import UserCard from "../user-card/user-card";

export interface UserData {
  avatarURL: string;
  name: string;
  login: string;
  location: string;
}

export default function SearchUser() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response: any = await axios.get(
        `https://api.github.com/users/${searchInput}`
      );

      const userFound: UserData = {
        avatarURL: response.data.avatar_url,
        login: response.data.login,
        name: response.data.name,
        location: response.data.location,
      };
      setUserData(userFound);
    } catch (e) {
      console.log("deu ruim");
    }
  };

  return (
    <section>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <IoSearch className={styles.searchIcon} />
        <input
          className={styles.input}
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          type="text"
          placeholder="Nome de usuário"
          required
        />
      </form>
      {userData !== null ? <UserCard userData={userData }/> : null}
    </section>
  );
}
