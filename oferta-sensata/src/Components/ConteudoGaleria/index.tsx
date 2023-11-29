import { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CardsGaleria from './CardsGaleria';
import useStyles from './styles';
import { dadosGaleriaMock } from './utils';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const ConteudoGaleria = () => {
  const styles = useStyles();

  // Quantidade de cards por página
  const cardsPerPage = 6;

  // Estado para controlar a página atual
  const [page, setPage] = useState(1);

  // Função para alterar a página
  const handleChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  // Índice inicial e final dos cards a serem exibidos
  const startIndex: number = (page - 1) * cardsPerPage;
  const endIndex: number = startIndex + cardsPerPage;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8, mt: '30px' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {dadosGaleriaMock.slice(startIndex, endIndex).map((card, index) => (
              <CardsGaleria key={index} {...card} />
            ))}
          </Grid>
          <Box sx={styles.box}>
            <Pagination
              count={10}
              page={page}
              onChange={handleChange}
              color="secondary"
            />
          </Box>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default ConteudoGaleria;
