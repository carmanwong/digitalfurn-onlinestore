import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, AccountCircle} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';

import useStyles from "./styles";

import {reportClickEvent,reportHoverEvent} from '../../eventTracking'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

  
    return (
        <>
            <AppBar position="fixed" id="header" className={classes.appBar} color="inherit" onMouseEnter={function(){reportHoverEvent("NavBar")}}>
                <Toolbar>
                    <Typography component={Link} to="/main" font-size="25px" variant="h3" className={classes.title} color="inherit" onClick={function(){reportClickEvent("NAV_DigitFurns")}} onMouseEnter={function(){reportHoverEvent("NavDigitFurns")}}>
                        DigitFurns.
                    </Typography>

                    <div className={classes.grow} />


                    {location.pathname !== '/cart' && (
                        <div className={classes.button}>
                              <IconButton component={Link} to="/login" aria-label="Account" color="inherit" onClick={function(){reportClickEvent("NAV_Login")}} onMouseEnter={function(){reportHoverEvent("NavLogin")}}>
                              <Badge  color="primary">
                                    <AccountCircle />
                                </Badge>
                            </IconButton>

                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" onClick={function(){reportClickEvent("NAV_Cart")}} onMouseEnter={function(){reportHoverEvent("NavCart")}}>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>

                    )}

                </Toolbar>

                <div className={classes.menu}  >
                    <IconButton className={classes.menuitem} id="NavSale" onClick={function(){reportClickEvent("NAV_Sale")}} onMouseEnter={function(){reportHoverEvent("NavSale")}} component={Link} to="/sale" > Sale </IconButton>  
                    <IconButton className={classes.menuitem} id="NavNewin" onClick={function(){reportClickEvent("NAV_NewIn")}} onMouseEnter={function(){reportHoverEvent("NavNewin")}} component={Link} to="/newin"> New In </IconButton>
                    <IconButton className={classes.menuitem} id="NavLivingrom" onClick={function(){reportClickEvent("NAV_Livingrom")}} onMouseEnter={function(){reportHoverEvent("NavLivingrom")}} component={Link} to="/livingroom"> Living Room </IconButton>
                    <IconButton className={classes.menuitem} id="NavBedroom" onClick={function(){reportClickEvent("NAV_Bedroom")}} onMouseEnter={function(){reportHoverEvent("NavBedroom")}} component={Link} to="/bedroom"> Bedroom </IconButton>
                    <IconButton className={classes.menuitem} id="NavAccessories" onClick={function(){reportClickEvent("NAV_Accessories")}} onMouseEnter={function(){reportHoverEvent("NavAccessories")}} component={Link} to="/accessories"> Accessories </IconButton>
                </div>


            </AppBar>

        </>
    )
}

export default Navbar