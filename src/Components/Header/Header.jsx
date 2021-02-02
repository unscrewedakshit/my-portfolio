import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import {AppBar, Toolbar, Typography, Button, IconButton, Drawer, MenuItem, Container, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    const[state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const{mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
              ? setState((prevState) => ({ ...prevState, mobileView: true }))
              : setState((prevState) => ({ ...prevState, mobileView: false }));
        }

        setResponsiveness();
        window.addEventListener("resize", () =>  setResponsiveness());
    },[]);

    const displayDesktop = () => {
        return(
            <Toolbar>
                <Container className={classes.navbarDisplayFlex}>
                    <Typography variant="h4" className={classes.title}>Portfolio</Typography>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        <Link smooth to="#" className={classes.listItem}> <ListItem button>HOME</ListItem> </Link>
                        <Link smooth to="#about" className={classes.listItem}> <ListItem button>ABOUT</ListItem> </Link>
                        <Link smooth to="#projects" className={classes.listItem}> <ListItem button>PROJECTS</ListItem> </Link>
                        <Link smooth to="#blog" className={classes.listItem}> <ListItem button>BLOG</ListItem> </Link>
                        <Link smooth to="#contact" className={classes.listItem}> <ListItem button>CONTACT</ListItem> </Link>
                    </List>
                </Container>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () => setState((prevState) => ({...prevState, drawerOpen: false}));

        return(
            <Toolbar>
                <Typography variant="h5" className={classes.title}>Portfolio</Typography>
                <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                    <div className={classes.drawerContainer}>
                        <a href="#" className={classes.drawerItem}> <MenuItem> HOME </MenuItem></a>
                        <a href="#about" className={classes.drawerItem}><MenuItem> ABOUT </MenuItem></a>
                        <a href="#projects" className={classes.drawerItem}><MenuItem> PROJECTS </MenuItem></a>
                        <a href="#blog" className={classes.drawerItem}><MenuItem> BLOG </MenuItem> </a>
                        <a href="#contact" className={classes.drawerItem}><MenuItem> CONTACT </MenuItem></a>
                    </div>
                </Drawer>  
                <IconButton color="inherit" edge="start" onClick={handleDrawerOpen} aria-haspopup="true"> <MenuIcon /> </IconButton>
            </Toolbar>
        )
    
    }

    return (
        <AppBar position="sticky" className={classes.root}>
            {mobileView? displayMobile() : displayDesktop()}
        </AppBar>
    );
};

export default Header;

