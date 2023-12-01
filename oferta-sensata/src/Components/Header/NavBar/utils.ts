export type SubcategoriaTypes = {
  id: ''
}

export type ItensTypes = {
  id: number;
  nomeItem: string;
  nm_categoria: string;
  // subcategoria: 
};

export type ItensMenuTypes = {
  id: number;
  categoria: string;
  itens: ItensTypes[];
};

export const itensMenu: ItensMenuTypes[] = [
  {
    id: 0,
    categoria: 'Categoria',
    itens: [
      {
        id: 0,
        nomeItem: 'Eletrônicos',
        nm_categoria: 'EN',
      },
      {
        id: 1,
        nomeItem: 'Eletrodomésticos',
        nm_categoria: 'EM',
      },
      {
        id: 2,
        nomeItem: 'Beleza',
        nm_categoria: 'BL',
      },
    ],
  },
];
