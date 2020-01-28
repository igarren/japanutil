import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DialpadIcon from '@material-ui/icons/Dialpad';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Link } from 'gatsby';



import classes from './drawer.module.css';

const menuList = [
    { text: 'Point Calculator', link: '/immigration', icon: <DialpadIcon /> },
    { text: 'Pension Calculator', link: '/pension', icon: <AccountBalanceIcon /> },
]
const Drawer = (props) => (
    <SwipeableDrawer
        open={props.status}
        onClose={props.toggle(false)}
        onOpen={props.toggle(true)} >
        <div
            className={classes.Drawer}
            role="navigation"
            onClick={props.toggle(false)}
            onKeyDown={props.toggle(false)} >
            <List>
                {menuList.map((menu,index) => (
                    <ListItem button key={index} component={Link} to={menu.link} >
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    </SwipeableDrawer>
);
export default Drawer;