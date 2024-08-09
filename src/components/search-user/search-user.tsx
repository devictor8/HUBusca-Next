"use client";

import { FormEvent, useState } from "react";
import styles from "./search-user.module.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import UserCard from "../user-card/user-card";
import { UserData } from "@/types/user-types";
import { ApiResponseUser } from "@/types/api-request-types";
import UserNotFoundCard from "../user-card/user-not-found-card";

export default function SearchUser() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [cardVisibility, setCardVisibility] = useState<"hidden" | "visible">(
    "hidden"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response: ApiResponseUser = await axios.get(
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
      setUserData(null);
    }
    setCardVisibility("visible");
  };

  return (
    <section>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <IoSearch className={styles.searchIcon} />
        <input
          className={styles.input}
          type="text"
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          placeholder="Nome de usuário"
          required
        />
      </form>

      {userData !== null ? (
        <UserCard userData={userData} />
      ) : (
        <UserNotFoundCard style={{ visibility: cardVisibility }} />
      )}
    </section>
  );
}
