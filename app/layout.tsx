import type { Metadata } from 'next';
import CarrinhoProvider from '@/app/context/CarrinhoContext';
import { Jersey_25, Jua, Kavoon } from 'next/font/google';
import './globals.css';

const Juafont = Jua({
  variable: '--font-Jua',
  subsets: ['latin'],
  weight: '400',
});

const Jersey25 = Jersey_25({
  variable: '--font-jersey-25',
  subsets: ['latin'],
  weight: '400',
});

const Kavoonfont = Kavoon({
  variable: '--font-kavoon',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Hamburgueria',
  description: 'Hamburgueria template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Juafont.variable} ${Jersey25.variable} ${Kavoonfont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CarrinhoProvider>{children}</CarrinhoProvider>
      </body>
    </html>
  );
}
