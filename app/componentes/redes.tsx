import Image from "next/image";
import Link from "next/link";
import instagram from "@/public/Instagram.png";
import ifood from "@/public/Ifood.png";
import styles from "@/app/styles/redes.module.css";
import noventaenove from "@/public/99food.png"

export default function ContainerRedes() {
  return (
    <section className={styles.containerredes}>
      <div className={styles.redestexto}>
      <h1>Redes sociais</h1>
      </div>

      <div className={styles.redes}>
        <Link href="https://www.instagram.com/hamburgueria/" target="_blank">
           <Image src={instagram} alt="Instagram" width={169} height={169} /> Instagram
        </Link>
        <Link href="https://www.ifood.com/hamburgueria" target="_blank">
          <Image src={ifood} alt="Ifood" width={169} height={169} /> Ifood
        </Link>
        <Link href="https://www.99.com/hamburgueria" target="_blank">
          <Image src={noventaenove} alt="99" width={169} height={169} /> 99
        </Link>
      </div>
    </section>
  );
}