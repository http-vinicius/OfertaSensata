import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import CardsGaleria from './CardsGaleria';
import useStyles from './styles';
import { dadosGaleriaMock } from './utils';
import Footer from '../Footer';

const ConteudoGaleria = () => {
  const styles = useStyles();
  var htmlElement = document.documentElement;

  // Quantidade de cards por página
  const cardsPerPage = 9;

  // Estado para controlar a página atual
  const [page, setPage] = useState(1);

  // Função para alterar a página
  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
    htmlElement.scrollTop = 0;
  };

  const totalPages = Math.ceil(dadosGaleriaMock.length / cardsPerPage);

  // Índice inicial e final dos cards a serem exibidos
  const startIndex: number = (page - 1) * cardsPerPage;
  const endIndex: number = startIndex + cardsPerPage;

  const isTotalItens =
    dadosGaleriaMock.slice(startIndex, endIndex).length === 9;

  return (
    <main style={styles.root}>
      <Container sx={styles.container} maxWidth="md">
        <Box sx={styles.boxItens(isTotalItens)}>
          <Grid container spacing={4}>
            {dadosGaleriaMock.slice(startIndex, endIndex).map((card, index) => (
              <CardsGaleria key={index} {...card} />
            ))}
          </Grid>
        </Box>
        <Box sx={styles.box}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="secondary"
          />
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default ConteudoGaleria;
