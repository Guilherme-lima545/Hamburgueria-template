'use server'

type Burger = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel?: boolean;
}

export async function GET_BURGER() {
  const response = await fetch('https://api-hamburgueria-production.up.railway.app/api/produtos', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json() as Burger[];

  return data
}