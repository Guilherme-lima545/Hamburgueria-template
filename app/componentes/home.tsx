import Image from 'next/image';
import containerimage from '@/public/Rectangle 2.png';
import styles from '@/app/styles/home.module.css';
import ContainerBurguer from './hamburgueres';
import Sobre from './sobre';
import ContainerRedes from './redes';
import ContainerBebidas from './bebidas';
import Footer from './Footer';
import ContainerBatata from './batatas';



export default function Homepage() {
  return (
    <>
      <main>
        <div className={styles.homecontainer}>
          <h1> A melhor hamburgueria da região</h1>
          <Image
            src={containerimage}
            alt="Imagem do container"
            width={2610}
            height={346}
          />
        </div>
        <ContainerBurguer />
        <Sobre />
        <ContainerRedes />
        <ContainerBebidas />
        <ContainerBatata />
      </main>
      <Footer />
    </>
  );
}
