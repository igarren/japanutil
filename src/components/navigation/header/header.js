import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import Badge from '@material-ui/core/Badge';
import Drawer from '../../navigation/drawer/drawer';
import classes from './header.module.css';

import Typography from '@material-ui/core/Typography';
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
                <Toolbar id={props.id} >
                    <Typography className={classes.Title} variant="h6" noWrap component={Link} to='/'>
                        Japan Util
                  </Typography>
                    <Badge color="secondary" variant="dot">
                        <Button color="secondary" component={Link} to='/immigration'>Immigration Calculator</Button>
                    </Badge>

                </Toolbar>
            </AppBar>
            <Drawer status={state.toggle} toggle={toggleDrawer} />
        </div>
    )
};


export default Header;