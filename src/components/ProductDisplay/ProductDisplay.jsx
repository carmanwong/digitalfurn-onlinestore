import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import { ImageSearch } from '@material-ui/icons';

import {reportClickEvent,reportHoverEvent} from '../../eventTracking'



const appStyle = {
    // height: '250px',
    // display: 'flex'
};

const formStyle = {
    fontFamily: 'Libre Baskerville',

    margin: 'auto',
    paddingTop: '10%',
    // border: '1px solid #c9c9c9',
    // borderRadius: '5px',
    background: '#f5f5f5',
    // width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#fff393',
    width: '100%',
    fontSize: '15px',
    color: 'black',
    display: 'block'
};


const Field = React.forwardRef(({ label, type }, ref) => {
    return (
        <div>
            <label style={labelStyle} >{label}</label>
            <input ref={ref} type={type} style={inputStyle} />
        </div>
    );
});


const Form = ({ onSubmit }) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
        <form style={formStyle} onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Email Address" type="text" />
            <Field ref={passwordRef} label="Passwor:" type="password" />
            <div>
                <Link to="/main"><button style={submitStyle} type="submit">SIGN IN</button></Link>
            </div>
        </form>
    );
};


const ProductDisplay = ( {onAddToCart}) => {
    const classes = useStyles();

    const location = useLocation();
    const { product } = location.state;

    



    return (
        <Container>
            <div className={classes.toolbar} />
            <div className="IndexLine"> Home / Product / {product.name} </div>

            <div className={classes.container}>
                <div className={classes.leftBox}  nMouseEnter={function(){reportHoverEvent("VIEW_LeftBox-" + product.name)}}>

                    <img width="100%" height="100%" src={product.image} onClick={function(){reportClickEvent("VIEW_IIMAGE-"+product.name)}} onMouseEnter={function(){reportHoverEvent("VIEW_IMAGE-"+product.name)}}/>


                </div>

                <div className={classes.rightBox}  nMouseEnter={function(){reportHoverEvent("VIEW_RightBox-" + product.name)}} >

                    <div className={classes.subTitle}>Availability: 2 in Stock   </div>
                    <div className={classes.titleProduct} onMouseEnter={function(){reportHoverEvent("VIEW_TITLE-"+product.name)}}> {product.name}    </div>
                    <div className={classes.priceProduct} onMouseEnter={function(){reportHoverEvent("VIEW_PRICE-"+product.name)}}> ${product.price}  </div>
                    <div className={classes.descriptionProduct} onMouseEnter={function(){reportHoverEvent("VIEW_DESC-"+product.name)}}> {product.description}  </div>

                    <div className={classes.subTitle} onMouseEnter={function(){reportHoverEvent("VIEW_COLOR-" + product.name)}}>COLOR: <br /> Brown </div>
                    <div className={classes.subTitle} onMouseEnter={function(){reportHoverEvent("VIEW_SIZE-" + product.name)}}> SIZE: <br /> 180cm x 120cm </div>
                    <div className={classes.subTitle} onMouseEnter={function(){reportHoverEvent("VIEW_MATERIAL-" + product.name)}}> MATERIAL: <br /> leather </div>


                    <br />

                    <button className={classes.addButton} onClick={function(){onAddToCart(product.id, 1); reportClickEvent("VIEW_ADD-"+product.name)}} onMouseEnter={function(){reportHoverEvent("VIEW_ADD-"+product.name)}}> ADD TO CART </button>

                </div>
            </div>



        </Container>

    );


    // return (
    //     <Container>



    //         <div className={classes.toolbar} />




    //         <div className={classes.container}>

    //             <div className={classes.leftBox}  >

    //                 {/* <img width="50%" height="50%" src={product.image} /> */}

    //                 {product.name}


    //                 <div style={appStyle}>

    //                 </div>
    //                 ${product.price}
    //             </div>



    //             {/* <img scr={ } />; */}

    //             <Card className={classes.root} >


    //                 <CardMedia className={classes.media} image={product.image} title={product.name} />
    //                 <CardContent>
    //                     <div className={classes.cardContent}>
    //                         <Typography variant="h5" gutterBottom>
    //                             {product.name}
    //                         </Typography>
    //                         <Typography variant="h5" >
    //                             {product.price}
    //                         </Typography>
    //                     </div>
    //                 </CardContent>

    //                 <CardActions disableSpacing className={classes.cardActions}>


    //                 </CardActions>

    //             </Card >

    //             <div className={classes.rightBox}   >


    //                 <button style={createStyle} type="createStyle">Add to the cart</button>

    //             </div>
    //         </div>



    //     </Container>

    // );
};

export default ProductDisplay;