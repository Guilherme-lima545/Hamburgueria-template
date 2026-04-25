'use client';
import styles from '@/app/styles/header.module.css';
import Image from 'next/image';
import carrinho from '@/public/output-onlinepngtools-com 1.png';
import { useCarrinho } from '../context/CarrinhoContext';
import Link from 'next/link';

export default function Header() {
  const { totalItem } = useCarrinho();


  return (
    <header className={styles.header}>
      <nav className={styles.headercontainer}>
        <Link href='/'><h1> Hamburgueria </h1> </Link>
        <button className={styles.carrinho}>
         <Link href='/carrinho'> <Image src={carrinho} alt="Carrinho" /> </Link>
          <span className={styles.quantidade}>{totalItem}</span>
        </button>
      </nav>
    </header>
  );
}
