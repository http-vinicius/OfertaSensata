import { Theme } from '@mui/material';

const useStyles = () => ({
  root: {
    height: '100vh',
    // border: '1px solid red',
  },
  container: {
    pt: '100px',
  },
  boxItens: (isTotalItens: boolean) => ({
    height: isTotalItens ? '100%' : '70vh',
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
