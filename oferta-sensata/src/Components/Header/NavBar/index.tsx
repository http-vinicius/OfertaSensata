import * as React from 'react';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../Icones/Logo';

import { itensMenu } from './utils';
import useStyles from './styles';
// import { Menu, MenuItem } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const NavBar = (props: Props) => {
  const styles = useStyles();
  const { window } = props;
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const open = Boolean(anchorEl);

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Categorias
      </Typography>
      <Divider />
      {itensMenu.map((item) => (
        <List key={item.id}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.nome_item} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={styles.root}>
      <AppBar component="nav" color="error">
        <Toolbar sx={styles.toolbar}>
          <Box
            sx={{
              ...styles.logo,
              display: { xs: 'block', sm: 'block', md: 'block' },
            }}
          >
            <Logo />
          </Box>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ...styles.icone, display: { sm: 'block', xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Box
            sx={{
              ...styles.boxToolbar,
              display: { xs: 'none', lg: 'block', md: 'block', sm: 'none' },
            }}
          >
            <Box sx={styles.boxButton}>
              {itensMenu.map((item) => (
                <div key={item.id}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    // endIcon={<KeyboardArrowDownIcon />}
                    color="warning"
                    variant="contained"
                    sx={styles.titulo}
                  >
                    <Typography sx={styles.tituloCategoria}>
                      {item.nome_item}
                    </Typography>
                  </Button>
                </div>
              ))}
            </Box>
          </Box> */}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
