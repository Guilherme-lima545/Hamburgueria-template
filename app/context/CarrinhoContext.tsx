'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CarrinhoItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem?: string;
}

interface CarrinhoContextType {
  itens: CarrinhoItem[];
  adicionaraocarrinho: (produto: Omit<CarrinhoItem, 'quantidade'>) => void;
  removerdocarrinho: (id: number) => void;
  atualizarQuantidade: (id: number, quantidade: number) => void;
  limparCarrinho: () => void;
  totalItem: number;
  totalpreco: number;
}

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export default function CarrinhoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [itens, setItens] = useState<CarrinhoItem[]>(() => {
    if(typeof window === 'undefined') return [];
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : []
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }, [itens]);

  function adicionaraocarrinho(produto: Omit<CarrinhoItem, 'quantidade'>) {
    setItens((prevItens) => {
      const itemExistente = prevItens.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prevItens.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }
      return [...prevItens, { ...produto, quantidade: 1 }];
    });
    alert('Produto adicionado ao carrinho!');
  }

  function removerdocarrinho(id: number) {
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  }

  function atualizarQuantidade(id: number, quantidade: number) {
    if (quantidade <= 0) return removerdocarrinho(id);
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, quantidade } : item,
      ),
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const totalItem = itens.reduce((acc, item) => acc + item.quantidade, 0);
  const totalpreco = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0,
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionaraocarrinho,
        removerdocarrinho,
        atualizarQuantidade,
        limparCarrinho,
        totalItem,
        totalpreco,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
}
