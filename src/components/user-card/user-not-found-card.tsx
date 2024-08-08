import Image from "next/image";
import Link from "next/link";
import styles from "./user-card.module.css";
import { ComponentProps } from "react";

interface UserNotFoundCardProps extends ComponentProps<'div'> {}

export default function UserNotFoundCard(props: UserNotFoundCardProps) {
  return (
    <div {...props} className={styles.card}>
      <p>O usuário não existe. Tente novamente!</p>
    </div>
  );
}
