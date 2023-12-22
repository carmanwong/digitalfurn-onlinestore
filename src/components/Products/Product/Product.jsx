import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
// import classes from '*.module.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './styles';

import {reportClickEvent,reportHoverEvent} from '../../../eventTracking'

const Product = ({ product, onAddToCart, page }) => {
    const classes = useStyles();

   

    // <Route path="/product/:catId" />


    const newTo = {
        pathname: "/product",
        data: "Par1"
    };


    return (


        <div>
            <Card className={classes.root} >
                <Link to={{
                    pathname: '/product',
                    state: {
                        product
                    }
                }}>
                    <CardMedia  className={classes.media} image={product.image} title={product.name} onClick={function(){reportClickEvent("THUMB_IMAGE-"+product.name)}} onMouseEnter={function(){reportHoverEvent("THUMB_IMAGE-"+product.name)}}/>
                    <div>
                        <div className={classes.cardContent}>
                            <div className={classes.titleProduct} onClick={function(){reportClickEvent("THUMB_TITLE-"+product.name)}}  onMouseEnter={function(){reportHoverEvent("THUMB_TITLE-"+product.name)}}>
                                {product.name}
                            </div>

                        </div>
                        <div className={classes.subTitle} onClick={function(){reportClickEvent("THUMB_PRICE-" + product.name)}}  onMouseEnter={function(){reportHoverEvent("THUMB_PRICE-" + product.name)}}>
                            ${product.price}
                        </div>
                    </div>
                </Link>
                <IconButton aria-label="Add to Cart" onClick={function(){onAddToCart(product.id, 1);reportClickEvent("THUMB_ADD-" + product.name)}}   onMouseEnter={function(){reportHoverEvent("THUMB_ADD-" + product.name)}}>
                    <AddShoppingCart />
                </IconButton>

            </Card >
        </div>



        // <div>
        //     <Card className={classes.root} >
        //         <Link to={{
        //             pathname: '/product',
        //             state: {
        //                 product
        //             }
        //         }}>
        //             <CardMedia className={classes.media} image={product.image} title={product.name} />
        //             <div>
        //                 <div className={classes.cardContent}>
        //                     <div className={classes.titleProduct}>
        //                         {product.name}
        //                     </div>

        //                 </div>
        //                 <div className={classes.subTitle}>
        //                     ${product.price}
        //                 </div>
        //             </div>
        //         </Link>
        //         <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
        //             <AddShoppingCart />
        //         </IconButton>

        //     </Card >
        // </div>


        //         {/* <div className="col-lg-3 col-md-4 col-sm-6">
        //                 <div className={classes.ttproduct}>
        //                     <div className={classes.imagebox}>
        //                         <div className="tt-btn-quickview" style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-13" data-original-title="Quick View"><span /></div>
        //                         <div className="tt-btn-compare " style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-14" data-original-title="Add to Compare"><span />
        //                         </div>
        //                         <div className="tt-btn-wishlist " style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-15" data-original-title="Add to Wishlist"><span />
        //                         </div>
        //                         <a href="/product/avanto-1.5t2">
        //                             <div className={classes.ttimg} ><img className={classes.productimg} src={product.image} alt="Avanto-1.5T2" /></div>
        //                             <div className="tt-label-location" />
        //                         </a>
        //                     </div>
        //                     <div className="tt-description ">
        //                         <div className="tt-row">
        //                             <ul className="tt-add-info">
        //                                 <li><a href="/">MEDICAL</a></li>
        //                             </ul>
        //                             <div className="tt-rating "><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></div>
        //                         </div>
        //                         <h2 className="tt-title"><a href="/product/avanto-1.5t2">Avanto-1.5T2</a></h2>
        //                         <div className="tt-price mt-1">$92.00</div>
        //                         <div className="tt-product-inside-hover">
        //                             <div className="tt-row-btn"><button className="tt-btn-addtocart thumbprod-button-bg ">ADD TO CART</button></div>
        //                             <div className="tt-row-btn d-md-none"><div className="tt-btn-quickview" style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-16" data-original-title="Quick View"><span /></div>
        //                                 <div className="tt-btn-compare " style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-17" data-original-title="Add to Compare"><span />
        //                                 </div>
        //                                 <div className="tt-btn-wishlist " style={{ display: 'inline' }} data-tooltipped aria-describedby="tippy-tooltip-18" data-original-title="Add to Wishlist"><span />
        //                                 </div>
        //                             </div></div></div></div></div>

        //  */}




    )
}





export default Product