import Container from '@mui/material/Container';

import useStyles from './styles';
import { Box } from '@mui/material';

const Home = () => {
  const styles = useStyles();

  return (
    <>
      <Container sx={styles.root}>
        <Box sx={styles.box}></Box>
      </Container>
    </>
  );
};

export default Home;
