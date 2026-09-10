import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Andrade Oliveira Remodelações | Remodelações e Obras',description:'Remodelações completas, eletricidade, canalização, pintura, pladur, pavimentos, avaliação técnica pré-compra e inspeções com drone. Peça o seu orçamento.'};
export default function RootLayout({children}: {children:React.ReactNode}) {return <html lang="pt-PT"><body>{children}</body></html>}
