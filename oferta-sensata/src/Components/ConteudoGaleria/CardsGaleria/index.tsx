import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

type CardsGaleriaProps = {
  key: number;
  imagem: string;
  title: string;
  content: string;
};

const CardsGaleria = ({ key, imagem, title, content }: CardsGaleriaProps) => {
  const styles = useStyles();

  return (
    <Grid item key={key} xs={12} sm={6} md={4}>
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
            pt: '56.25%',
          }}
          image={imagem}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{content}</Typography>
        </CardContent>
        <CardActions sx={styles.button}>
          <Button variant="contained" color='error'>Contained</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardsGaleria;
