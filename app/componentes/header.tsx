import styles from '@/app/styles/header.module.css';
import Image from 'next/image';
import carrinho from '@/public/output-onlinepngtools-com 1.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.headercontainer}>
        <h1> Hamburgueria </h1>
        <button className={styles.carrinho}>
          <Image src={carrinho} alt="Carrinho" />
        </button>
      </nav>
    </header>
  );
}
