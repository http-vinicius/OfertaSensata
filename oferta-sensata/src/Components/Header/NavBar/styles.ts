import { Theme } from '@mui/material/styles';

const useStyles = () => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  boxToolbar: {
    justifyContent: 'center',
    width: '100%',
  },
  boxButton: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
  },
  icone: {
    marginRight: 2,
  },
  logo: {
    height: 64,
    width: 120,
  },
  titulo: {
    fontSize: (theme: Theme) => theme.typography.body1.fontSize,
    fontWeight: 'bold',
    // textTransform: 'capitalize',
  },
  tituloCategoria: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default useStyles;
