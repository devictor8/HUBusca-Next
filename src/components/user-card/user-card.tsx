import Image from "next/image";
import Link from "next/link";
import styles from "./user-card.module.css";
import { UserData } from "@/types/user-types";
import { ComponentProps } from "react";

interface UseCardProps extends ComponentProps<'div'>{
  userData: UserData;
}

export default function UserCard(props: UseCardProps) {
  const { userData } = props;

  return (
    <div { ...props }className={styles.card}>
      <Link href={"#"}>
        <Image
          src={userData.avatarURL}
          width={90}
          height={90}
          alt={`foto de perfil do usuário ${userData.login}`}
        />
      </Link>
      <section className={styles.userInfo}>
        <p>Nome: {userData.name}</p>
        <p>Login: {userData.login}</p>
        <p>Localização: {userData.location}</p>
      </section>
    </div>
  );
}
