import { Theme } from '@mui/material';

const useStyles = () => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    paddingTop: (theme: Theme) => theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;
