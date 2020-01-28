import React , {useState }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'gatsby';

import Drawer from '../../navigation/drawer/drawer';
import classes from './header.module.css';


const Header = (props) => {
  const [state, setState] = useState({
      toggle: false
  });

  const toggleDrawer = (open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }

      setState({ toggle: open });
  };

  return (
      <div className={classes.Header}>
          <AppBar className={classes.AppBar} position="static" >
              <Toolbar>
                  <IconButton
                      edge="start"
                      className={classes.MenuButton}
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer(!state.toggle)}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography className={classes.Title} variant="h6" noWrap component={Link} to='/'>
                      Japan Util
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer status={state.toggle} toggle={toggleDrawer} />
      </div>
  )
};


export default Header;