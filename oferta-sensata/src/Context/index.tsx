import { createContext, PropsWithChildren, useContext, useState } from 'react';

type OfertaSensataValues = {
  categoria: string;
  atualizarCategoria: (valor: string) => void;
};

const OfertaSensataContext = createContext({} as OfertaSensataValues);

const OfertaSensataProvider = ({ children }: PropsWithChildren) => {
  const [categoria, atualizarCategoria] = useState('TD');

  const values = {
    categoria,
    atualizarCategoria,
  };

  return (
    <OfertaSensataContext.Provider value={values}>
      {children}
    </OfertaSensataContext.Provider>
  );
};

export const useOfertaSensata = () => {
  const context = useContext(OfertaSensataContext);

  if (!context) {
    throw new Error(
      'useOfertaSensata deve ser utilizado dentro de um OfertaSensataProvider!',
    );
  }

  return context;
};

export default OfertaSensataProvider;
