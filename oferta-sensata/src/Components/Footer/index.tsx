import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  const handleClick = useCallback(() => {
    window.location.href = 'https://www.instagram.com/ofertasensata/';
  }, []);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 2,
        p: 2,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component="footer"
    >
      <IconButton onClick={handleClick}>
        <InstagramIcon fontSize="large" color="secondary" />
      </IconButton>
      <Typography
        variant="subtitle2"
        align="center"
        color="text.secondary"
        component="p"
      >
        Instagram
      </Typography>
    </Box>
  );
};

export default Footer;
