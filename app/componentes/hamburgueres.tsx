'use client';
import styles from '@/app/styles/hamburguer.module.css';
import Image from 'next/image';
import { GET_BURGER } from '../api/route';
import { useEffect, useState } from 'react';
import hamburguerdefault from '@/public/Hamburguer default.png';

type Burger = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel?: boolean;
};


const page = 3

export default function ContainerBurguer() {
  const [hamburgueres, setHamburgueres] = useState<Burger[] | null>(null);
  const [vermais, setvermais] = useState(page);

  useEffect(() => {
    async function fetchData() {
      const data = await GET_BURGER();
      setHamburgueres(data);
    }
    fetchData();
  }, []);

  const hamburguerfiltro = hamburgueres?.filter(
    (hamburguer) => hamburguer.categoria === 'hamburguer',
  );

  const handlevermais = () => {
    setvermais((prev) => prev + page)
  }

  return (
    <section className={styles.containerburguer}>
      <div className={styles.textohamburguer}>
        <h1> Hamburgueres </h1>
      </div>

      <div className={styles.hamburguer}>
        {hamburguerfiltro?.slice(0, vermais).map((hamburguer) => (
          <ul key={hamburguer.id} className={styles.hamburgueritem}>
            <Image
              src={hamburguerdefault}
              alt="Hamburguer"
              width={200}
              height={200}
            />
            <h2>{hamburguer.nome}</h2>
            <p>{hamburguer.descricao}</p>
            <p>R$ {hamburguer.preco}</p>
            <div className={styles.botoes}>
              <button className={styles.comprar}>Comprar</button>
              <button className={styles.adicionar}> Carrinho </button>
            </div>
          </ul>
        ))}
      </div>
      <span className={styles.vermais} onClick={handlevermais}> ⬇ Ver mais ⬇ </span>
    </section>
  );
}
