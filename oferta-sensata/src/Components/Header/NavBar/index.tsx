import * as React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../Icones/Logo';

import { itensMenu } from './Types';
import useStyles from './styles';

const NavBar = () => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.root}>
      <AppBar component="nav" color="error">
        <Toolbar sx={styles.toolbar}>
          <Box
            sx={{
              ...styles.logo,
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            <Logo />
          </Box>
          <Box display="flex" sx={styles.boxToolbar}>
            <Box sx={styles.boxButton}>
              {itensMenu.map((item) => (
                <div>
                  <Button
                    key={item.id}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    color="inherit"
                    sx={styles.titulo}
                  >
                    {item.categoria}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {item.itens.map((item) => (
                      <MenuItem key={item.id} onClick={handleClose}>
                        {item.nomeItem}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
