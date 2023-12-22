import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';


import { reportClickEvent, reportHoverEvent } from '../../eventTracking'


const Cart = ({ shopCart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddToCart, onMinusToCart }) => {




  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);



  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );


  // if (!shopCart.line_items) return 'Loading';

  // const renderCart = () => (
  //   <>
  //     <Grid container spacing={3}>
  //       {shopCart.line_items.map((lineItem) => (
  //         <Grid item xs={12} sm={4} key={lineItem.id}>
  //           <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
  //         </Grid>
  //       ))}
  //     </Grid>
  //     <div className={classes.cardDetails}>
  //       <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
  //       <div>
  //         <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
  //         <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
  //       </div>
  //     </div>
  //   </>
  // );



  let updateSubTotal = subTotal;

  let subtotal = 0;


  shopCart.map((product => {
    console.log("product price is... ");
    console.log(product.price);
    subtotal += product.price * product.q;
    // setSubTotal(updateSubTotal);
    console.log("current subTotal is... ");
    console.log(subtotal);
    console.log("product quantity is... ");
    console.log(product.q);
  }));

  return (
    // <Container>
    //   <div className={classes.toolbar} />
    //   <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
    //   { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    // </Container>



    <Container className={classes.bigcontainer}>
      <div className={classes.toolbar} />
      <div className={classes.title} onMouseEnter={function () { reportHoverEvent("CART_Title") }}> SHOPPING CART </div>
      <div className={classes.container}>

        {/* {renderEmptyCart()} */}
        {/* {renderCart()} */}

        <div className={classes.leftBox} onMouseEnter={function () { reportHoverEvent("CART_LEFTBOX") }}>

          <div className={classes.separation}>
            <div className={classes.product}>Product  </div>
            <div className={classes.quantity}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity </div>
            <div className={classes.price}>&nbsp;&nbsp;Subtotal</div>
          </div>

          <hr />

          {shopCart.map((product) => (

            <div>
              <div className={classes.singleItem} >

                <div className={classes.product}>
                  <img className={classes.image} width="10%" height="10%" src={product.image} onMouseEnter={function () { reportHoverEvent("CART_IMAGE-" + product.name) }} />
                  <div className={classes.name} onMouseEnter={function () { reportHoverEvent("CART_ProdName-" + product.name) }}> {product.name}  </div>
                </div>


                <div className={classes.quantity} >
                  <div className={classes.adddrop}>
                    <button key={1} onClick={() => { onAddToCart(product.id, -1); reportClickEvent("CART_quantminus" + product.id); }} className={classes.adddropButton} onMouseEnter={function () { reportHoverEvent("CART_QUANT_MINUS-" + product.name) }}>-</button>
                    <input className={classes.quantityinput} type="text" size="11" readonly="" value={product.q} onMouseEnter={function () { reportHoverEvent("CART_QUANT_INPUT-" + product.name) }}></input>
                    <button key={2} onClick={() => { onAddToCart(product.id, 1); reportClickEvent("CART_quantplus" + product.id); }} className={classes.adddropButton} onMouseEnter={function () { reportHoverEvent("CART_QUANT_PLUS-" + product.name) }}>+</button>
                  </div>
                </div>

                <div className={classes.price} onMouseEnter={function () { reportHoverEvent("CART_PRICE-" + product.name) }}> ${product.price}  </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className={classes.rightBox} onMouseEnter={function () { reportHoverEvent("CART_RightBox") }}>

          <div>
            <div className={classes.tablerow} onMouseEnter={function () { reportHoverEvent("CART_Subtotal") }}>
              <div className={classes.subtotal}>SUBTOTAL</div>
              <div className={classes.subtotalPrice}>${subtotal} </div>
            </div>

            <div className={classes.tablerow} onMouseEnter={function () { reportHoverEvent("CART_Grandtotal") }}>
              <div className={classes.grandTotalTitle}>GRAND TOTAL</div>
              <div className={classes.grandTotal}>${subtotal} </div>
            </div>
          </div>

          <br />

          <div className={classes.descriptionProduct} onMouseEnter={function () { reportHoverEvent("CART_ExclDelivery") }}>* Excluding delivery.</div>
          <br />
          <br />



          <Button component={Link} to="/checkout" className={classes.button} onClick={function () { reportClickEvent("CART_toCheckout") }} onMouseEnter={function () { reportHoverEvent("CART_toCheckout") }}> PROCEED TO CHECKOUT</Button>


          {/* <button className={classes.addButton} onClick={}> ADD TO CART </button> */}

        </div>
        {/* <div className={classes.rightBox}   >

          <div className={classes.subTitle}>ESTIMATE SHIPPING AND TAX  </div>
          <div className={classes.descriptionProduct}>Enter your destination to get a shipping estimate.</div>

          <div className={classes.subTitle}>COUNTRY *  </div>
          <select className={classes.select} id="address_country" class="form-control">
            <option>Austria</option>
            <option>Belgium</option>
            <option>Cyprus</option>
            <option>Croatia</option>
            <option>Czech Republic</option>
            <option>Denmark</option>
            <option>Finland</option>
            <option>France</option>
            <option>Germany</option>
            <option>Greece</option>
            <option>Hungary</option>
            <option>Ireland</option><option>France</option><option>Italy</option><option>Luxembourg</option><option>Netherlands</option><option>Poland</option><option>Portugal</option><option>Slovakia</option><option>Slovenia</option><option>Spain</option><option>United Kingdom</option>
          </select>

          <div className={classes.subTitle}>STATE/PROVINCE *  </div>
          <select className={classes.select} id="address_province" class="form-control"><option>State/Province</option><option>Dhaka</option></select>

          <div className={classes.subTitle}>ZIP/POSTAL CODE *  </div>
          <input className={classes.select} type="text" id="address_zip" name="name" class="form-control" placeholder="Zip/Postal Code" />

          <br />
          <button className={classes.selectButton}>CALCULATE SHIPPING</button>

          <div className={classes.descriptionProduct}>International Shipping at $20.00 </div>


          <div>
            <div className={classes.tablerow}>
              <div className={classes.subtotal}>SUBTOTAL</div>
              <div className={classes.subtotalPrice}>${subtotal} </div>
            </div>

            <div className={classes.tablerow}>
              <div className={classes.grandTotalTitle}>GRAND TOTAL</div>
              <div className={classes.grandTotal}>${subtotal} </div>
            </div>
          </div>

          <br />

          <button className={classes.selectButton}> PROCEED TO CHECKOUT</button>


          {/* <button className={classes.addButton} onClick={}> ADD TO CART </button> </div> */}
      </div>

      <br />

    </Container >




  );
};

export default Cart;



