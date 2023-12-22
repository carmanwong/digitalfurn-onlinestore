import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

import {reportClickEvent,reportHoverEvent} from '../../eventTracking'

// const products = [
//     { id: 1, name: 'Shoes', description: "Running shoes.", price: '$5', image: 'https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/AC/91/33b7ea6b-1abb-4afe-83b1-2ee9d76f1f7c.jpg' },
//     { id: 2, name: 'Macbook', description: "Apple macbook.", price: '$10', image: 'https://news.xfastest.com/wp-content/uploads/2020/06/macbook-air-2020.jpg' },

// ];

//<Products products={products} page="accessories" onAddToCart={handleAddToCart} />


const Products = ({ products, onAddToCart, page }) => {
    const classes = useStyles();

    const newItems = [];


    if (page === "sale") {
        
        products.map((product) => {
             console.log("current product " + product.name);
            if (product.price <= 25) {
                console.log("product name " + product.name);

                newItems.push({
                    id: product.id,
                    image: product.image,
                    type: product.type,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                 console.log(newItems);
            }
        })
    }
    else if (page === "newin") {
        products.map((product) => {
            // console.log("current product " + product.name);
            if (product.id % 2 === 0) {

                newItems.push({
                    id: product.id,
                    image: product.image,
                    type: product.type,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                // console.log(newItems);
            }
        })
    }
    else if (page === "livingroom") {
        products.map((product) => {
            // console.log("current product " + product.name);
            if (product.type === "livingroom") {

                newItems.push({
                    id: product.id,
                    image: product.image,
                    type: product.type,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                // console.log(newItems);
            }
        })
    }
    else if (page === "bedroom") {
        products.map((product) => {
            // console.log("current product " + product.name);
            if (product.type === "bedroom") {

                newItems.push({
                    id: product.id,
                    image: product.image,
                    type: product.type,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                // console.log(newItems);
            }
        })
    }
    else if (page === "accessories") {
        products.map((product) => {
            // console.log("current product " + product.name);
            if (product.type === "accessories") {

                newItems.push({
                    id: product.id,
                    image: product.image,
                    type: product.type,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                // console.log(newItems);
            }
        })
    }


    


    return (
        <main className={classes.content}> 
            <div className={classes.toolbar} />

            <div className={classes.container}>

                <Grid container justify="center" spacing={4} >

                    {newItems.map((product) => (

                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} id={product.id} onClick={function(){reportClickEvent(page + "" + product.id)}} onMouseEnter={function(){ reportHoverEvent(page + "" + product.id)}} onAddToCart={onAddToCart} page={page} />
                            {/* This is the card of every product */}

                        </Grid>

                    ))}

                </Grid>
            </div>
        </main>
    )


}

export default Products;