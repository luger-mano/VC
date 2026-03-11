export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  favorite?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Bolsa Amarela Vibra',
    category: 'Franjinha',
    price: 64.99,
    image: 'assets/bolsa_amarela.svg',
    images: [
      'assets/bolsa_amarela.svg',
      'assets/bolsa_amarela.svg',
      'assets/bolsa_amarela.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 2,
    name: 'Bolsa Azul Serena',
    category: 'Franjinha',
    price: 64.99,
    image: 'assets/bolsa_azul.svg',
    images: [
      'assets/bolsa_azul.svg',
      'assets/bolsa_azul.svg',
      'assets/bolsa_azul.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 3,
    name: 'Bolsa Laranja Alça',
    category: 'Franjinha',
    price: 64.99,
    image: 'assets/bolsa_laranja_alca.svg',
    images: [
      'assets/bolsa_laranja_alca.svg',
      'assets/bolsa_laranja_alca.svg',
      'assets/bolsa_laranja_alca.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 4,
    name: 'Bolsa Roxa Elegante',
    category: 'Clássica',
    price: 64.99,
    image: 'assets/bolsa_roxa.svg',
    images: [
      'assets/bolsa_roxa.svg',
      'assets/bolsa_roxa.svg',
      'assets/bolsa_roxa.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 5,
    name: 'Bolsa Verde Fresca',
    category: 'Natural',
    price: 64.99,
    image: 'assets/bolsa_verde.svg',
    images: [
      'assets/bolsa_verde.svg',
      'assets/bolsa_verde.svg',
      'assets/bolsa_verde.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 6,
    name: 'Bolsa Verde Escuro',
    category: 'Premium',
    price: 64.99,
    image: 'assets/bolsa_verde_escuro.svg',
    images: [
      'assets/bolsa_verde_escuro.svg',
      'assets/bolsa_verde_escuro.svg',
      'assets/bolsa_verde_escuro.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  },
  {
    id: 7,
    name: 'Bolsa Vermelha Paixão',
    category: 'Especial',
    price: 64.99,
    image: 'assets/bolsa_vermelha.svg',
    images: [
      'assets/bolsa_vermelha.svg',
      'assets/bolsa_vermelha.svg',
      'assets/bolsa_vermelha.svg'
    ],
    description: 'Seu tom vibrante transmite energia e bom humor, enquanto o trabalho artesanal garante'
  }
];
