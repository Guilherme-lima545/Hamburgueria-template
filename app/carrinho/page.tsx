'use client';
import Header from '../componentes/header';
import { useCarrinho } from '../context/CarrinhoContext';
import styles from '@/app/styles/carrinho.module.css';

export default function Carrinho() {
  const {
    itens,
    totalItem,
    totalpreco,
    removerdocarrinho,
    adicionaraocarrinho,
  } = useCarrinho();

  return (
    <>
      <Header />
      <div className={styles.containercarrinho}>
        <table className={styles.tabelacarrinho}>
          {itens.map((item) => (
            <tr>
              <th>
                {item.nome} R${item.preco}
                <div className={styles.containermaisemenos}>
                  <button
                    onClick={() => adicionaraocarrinho(item)}
                    className={styles.botaomais}
                  >
                    +
                  </button>
                  <button className={styles.botaoquantidade}>
                    {item.quantidade}
                  </button>
                  <button
                    onClick={() => removerdocarrinho(item.id)}
                    className={styles.botaomenos}
                  >
                    -
                  </button>
                </div>
              </th>
            </tr>
          ))}
          <div className={styles.botao}>
            <button className={styles.botaovoltar}>Voltar</button>
            <button className={styles.botaofinalizar}>Finalizar Compra</button>
          </div>
        </table>

        <aside className={styles.somatoria}>
          <table>
          <tbody>
            {itens.map((item) => (
              <tr>
                <th>{item.nome} </th> 
                <th>x{item.quantidade} </th>
                <th>R$ {(item.preco * item.quantidade).toFixed(2)} </th>
              </tr>
            ))}
            <tr className={styles.total}>
              <th colSpan={2}>Total: </th>
              <th>R${totalpreco.toFixed(2)}</th>
            </tr>
          </tbody>
          </table>
        </aside>
      </div>
    </>
  );
}
