'use client';
import styles from '@/app/styles/batata.module.css';
import Image from 'next/image';
import { GET_BURGER } from '../api/route';
import { useEffect, useState } from 'react';
import BatataDefault from '@/public/BatataDefault.png';

type Batatas = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel?: boolean;
};

export default function ContainerBatata() {
  const [batatas, setBatatas] = useState<Batatas[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GET_BURGER();
      setBatatas(data);
    }
    fetchData();
  }, []);

  const batatafiltro = batatas?.filter(
    (batata) => batata.categoria === 'Batata',
  );

  return (
    <section className={styles.containerbatata}>
      <div className={styles.textobatata}>
        <h1> Batatas </h1>
      </div>

      <div className={styles.batata}>
        {batatafiltro?.map((batata) => (
          <ul key={batata.id} className={styles.batataitem}>
            <Image
              src={BatataDefault}
              alt="Batata"
              width={200}
              height={200}
            />
            <h2>{batata.nome}</h2>
            <p>{batata.descricao}</p>
            <p>R$ {batata.preco}</p>
            <div className={styles.botoes}>
              <button className={styles.comprar}>Comprar</button>
              <button className={styles.adicionar}> Carrinho </button>
            </div>
          </ul>
        ))}
      </div>
      <span className={styles.vermais}> ⬇ Ver mais ⬇ </span>
    </section>
  );
}
