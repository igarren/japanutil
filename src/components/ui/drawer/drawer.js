import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DialpadIcon from '@material-ui/icons/Dialpad';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {Link} from 'react-router-dom';



import classes from './drawer.module.css';
const Drawer = (props) => (
    <SwipeableDrawer
        open={props.status}
        onClose={props.toggle(false)}
        onOpen={props.toggle(true)} >
        <div
            className={classes.Drawer}
            role="navigation"
            onClick={props.toggle( false)}
            onKeyDown={props.toggle( false)} >
            <List>
                <ListItem button component={Link} to='/calculator' >
                    <ListItemIcon><DialpadIcon /></ListItemIcon>
                    <ListItemText primary='Calculator' />
                </ListItem>
                <ListItem button component={Link} to='/pension' >
                    <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                    <ListItemText primary='Pension' />
                </ListItem>
            </List>
        </div>
    </SwipeableDrawer>
);
export default Drawer