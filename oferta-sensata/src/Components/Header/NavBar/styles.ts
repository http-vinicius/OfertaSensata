import { Theme } from '@mui/material';

const useStyles = () => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    justifyContent: 'center',
  },
  boxToolbar: {
    width: '100vh',
    justifyContent: 'center',
  },
  icone: {
    marginRight: 2,
  },
  logo: {
    height: 64,
    width: 120,
  },
  boxButton: {
    display: 'flex',
    alignItems: 'center',
  },
  titulo: {
    fontSize: (theme: Theme) => theme.typography.body1.fontSize,
    fontWeight: 'bold',
  },
});

export default useStyles;
