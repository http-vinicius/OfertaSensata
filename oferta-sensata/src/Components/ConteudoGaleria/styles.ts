import { Theme } from '@mui/material/styles';

const useStyles = () => ({
  root: {
    height: '100vh',
  },
  container: {
    pt: '100px',
  },
  boxItens: (isTotalItens: boolean) => ({
    height: isTotalItens ? '100%' : '100%',
  }),
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    paddingTop: (theme: Theme) => theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;
