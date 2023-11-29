import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Note your Knowledge as a Blog here.
        </h1>
        <p className={styles.desc}>
          Share Knowledge to everyone.
        </p>
        <Button url="/dashboard/login" text="Sing In to Post Your Blog"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
