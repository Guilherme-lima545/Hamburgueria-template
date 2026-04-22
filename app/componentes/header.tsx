'use client';
import styles from '@/app/styles/header.module.css';
import Image from 'next/image';
import carrinho from '@/public/output-onlinepngtools-com 1.png';
import { useCarrinho } from '../context/CarrinhoContext';

export default function Header() {
  const { itens, totalItem } = useCarrinho();


  return (
    <header className={styles.header}>
      <nav className={styles.headercontainer}>
        <h1> Hamburgueria </h1>
        <button className={styles.carrinho}>
          <Image src={carrinho} alt="Carrinho" />
          <span className={styles.quantidade}>{totalItem}</span>
        </button>
      </nav>
    </header>
  );
}
