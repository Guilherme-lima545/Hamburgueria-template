'use client';
import styles from '@/app/styles/bebidas.module.css';
import Image from 'next/image';
import { GET_BURGER } from '../api/route';
import { useEffect, useState } from 'react';
import Cocacoladefault from '@/public/Coca Cola.png';
import { useCarrinho } from '../context/CarrinhoContext';

type Bebidas = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel?: boolean;
};

const page =  3

export default function ContainerBebidas() {
  const [bebidas, setBebidas] = useState<Bebidas[] | null>(null);
  const [vermais, setvermais] = useState(page);
  const {adicionaraocarrinho} = useCarrinho();
  

  useEffect(() => {
    async function fetchData() {
      const data = await GET_BURGER();
      setBebidas(data);
    }
    fetchData();
  }, []);

  const bebidasfiltro = bebidas?.filter(
    (bebida) => bebida.categoria === 'bebidas',
  );

    const handlevermais = () => {
    setvermais((prev) => prev + page)
  }

  return (
    <section className={styles.containerbebida}>
      <div className={styles.textobebida}>
        <h1> Bebidas </h1>
      </div>

      <div className={styles.bebida}>
        {bebidasfiltro?.slice(0, vermais).map((bebida) => (
          <ul key={bebida.id} className={styles.bebidaitem}>
            <Image
              src={Cocacoladefault}
              alt="Bebida"
              width={200}
              height={200}
            />
            <h2>{bebida.nome}</h2>
            <p>{bebida.descricao}</p>
            <p>R$ {bebida.preco}</p>
            <div className={styles.botoes}>
              <button className={styles.comprar}>Comprar</button>
              <button className={styles.adicionar} onClick={() => adicionaraocarrinho(bebida)}> Carrinho </button>
            </div>
          </ul>
        ))}
      </div>
      <span className={styles.vermais} onClick={handlevermais}> ⬇ Ver mais ⬇ </span>
    </section>
  );
}
