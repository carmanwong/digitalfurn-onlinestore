import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import sale_banner1 from './sale_banner1.png';
import sale_banner2 from './sale_banner2.png';
import sale_banner3 from './sale_banner3.png';
import main_linkto_livingroom from './main_linkto_livingroom.png';
import main_linkto_newin from './main_linkto_newin.png';
import main_linkto_bedroom from './main_linkto_bedroom.png';
import main_linkto_accessories from './main_linkto_accessories.png';
import main_linkto_sale from './main_linkto_sale.png';


import {reportClickEvent,reportHoverEvent} from '../../eventTracking'

const Main = ({ }) => {
    const classes = useStyles();

    




    console.log("entered the Main page");

    return (
        <Container>
            <div className={classes.toolbar} />

            <Typography className={classes.title} variant="h3" gutterBottom>  </Typography>

            <div className={classes.bannergroup1}>

                <img className={classes.banner1} src={sale_banner1} alt="sale_banner1" onMouseEnter={function(){reportHoverEvent("MAIN_Join")}}/>
 
                <img className={classes.banner2} src={sale_banner2} alt="sale_banner2" width='50%' onMouseEnter={function(){reportHoverEvent("MAIN-FreeDelivery")}}/>
                <br /><br />
            </div>
            <img src={sale_banner3} alt="sale_banner3" width='100%' onMouseEnter={function(){reportHoverEvent("MAIN_20Percent")}}/>
            <br /><br /><br />

            <Link to="/livingroom">
                <img src={main_linkto_livingroom} alt="main_linkto_livingroom" onClick={function(){reportClickEvent("MAIN_LinkLivingroom"); }} onMouseEnter={function(){reportHoverEvent("MAIN_LinkLivingroom")}}width='100%' />;
            </Link>



            <div className={classes.bannergroup2}>
                <Link to="/bedroom">
                    <img className={classes.banner3} src={main_linkto_bedroom} alt="main_linkto_bedroom" width='33%' onClick={function(){reportClickEvent("MAIN_LinkBedroom")}} onMouseEnter={function(){reportHoverEvent("MAIN_LinkBedroom")}} />
                </Link>
                <Link to="/newin">
                    <img className={classes.banner4} src={main_linkto_newin} alt="main_linkto_newin" width='33%' onClick={function(){reportClickEvent("MAIN_LinkNewIin")}} onMouseEnter={function(){reportHoverEvent("MAIN_LinkNewin")}}/>
                </Link>
                <Link to="/accessories">
                    <img className={classes.banner5} src={main_linkto_accessories} alt="main_linkto_accessories" width='33%' onClick={function(){reportClickEvent("MAIN_LinkAccessories")}} onMouseEnter={function(){reportHoverEvent("MAIN_LinkAccessories")}}/>
                </Link>
            </div>

            <Link to="/sale">
                <img src={main_linkto_sale} alt="main_linkto_sale" width='100%' onClick={function(){reportClickEvent("MAIN_LinkSale")}} onMouseEnter={function(){reportHoverEvent("MAIN_LinkSale")}}/>;
            </Link>


        </Container>

    );
};

export default Main;