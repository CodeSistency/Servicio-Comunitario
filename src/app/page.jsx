import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Unidad Educativa Cabrera Malo
        </h1>
        <p className={styles.desc}>
          Estudia aquí en nuestra institución. Te acercamos a un mejor futuro.
        </p>
        <Button url="/register" text="Registrate" className="button"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
