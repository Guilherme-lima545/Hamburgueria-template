import styles from '@/app/styles/sobre.module.css';
import Image from 'next/image';
import containerimage from '@/public/Imagemcontanersobre.png';

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.sobrecontainer}>
        <Image
          src={containerimage}
          alt="Imagem do container"
          width={470}
          height={346}
        />
        <aside className={styles.textosobre}>
          <h1> 📍 São paulo </h1>
          <p>
            A [Nome da Hamburgueria] nasceu em [ano] com uma missão simples:
            fazer o hambúrguer que a gente sempre quis comer. Aqui, cada detalhe
            importa. Nossos hambúrgueres são feitos com carne [artesanal / 100%
            angus / fresquinha do dia], pão [brioche / australiano / artesanal]
            assado na hora e ingredientes selecionados com cuidado. Nada de
            congelado, nada de atalho. [Opcional: adicione um toque pessoal, ex:
            "Tudo começou na cozinha da nossa família..." ou "Foi numa viagem
            para Nova York que a ideia surgiu..."] Seja você um fã do clássico
            smash, do burger duplo com bacon ou de algo diferente do cardápio,
            nosso compromisso é o mesmo: sabor de verdade, feito com carinho.
            Venha nos visitar. A mesa está posta — e o hambúrguer está quase
            pronto.
          </p>
          <h2>Horario de funcionamento: 18:00hrs ás 23:00hrs</h2>
        </aside>
      </div>
    </section>
  );
}
