import { useCallback } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

type CardsGaleriaProps = {
  imagem: string;
  title: string;
  link: string;
};

const CardsGaleria = ({ imagem, title, link }: CardsGaleriaProps) => {
  const styles = useStyles();

  const handleClick = useCallback(() => {
    window.location.href = link;
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '90%',
          }}
          image={imagem}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" textAlign='center'>
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={styles.button}>
          <Button variant="contained" color="error" onClick={handleClick}>
            Ver na loja
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardsGaleria;
