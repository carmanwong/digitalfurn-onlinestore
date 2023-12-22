import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import tick from './tick.svg';


import { reportClickEvent, reportHoverEvent } from '../../eventTracking'

const Confirmation = ({ shopCart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddToCart, onMinusToCart }) => {
    const classes = useStyles();

    const history = useHistory();


    const appStyle = {
        // height: '250px',
        // display: 'flex'
    };

    let subtotal = 0;
    let grandTotal = 0;


    shopCart.map((product => {
        console.log("product price is... ");
        console.log(product.price);
        subtotal += product.price * product.q;
        grandTotal = subtotal + 100;

        // setSubTotal(updateSubTotal);
        console.log("current subTotal is... ");
        console.log(subtotal);
        console.log("product quantity is... ");
        console.log(product.q);
    }));


    const formStyle = {

        margin: 'auto',
        paddingTop: '10%',
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
        margin: '5px',
        background: 'transparent',
        color: '#2879fe',
        border: '2px solid #2879fe',
        height: '40px',
        paddingLeft: '29px',
        paddingRight: '29px',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '.03em',
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: '#191919',
            color: '#fff',
            borderColor: '#191919',
            outline: 'none',
        }
    };



    const createStyle = {
        margin: '10px 0 0 0',
        padding: '7px 10px',
        border: '1px solid #efffff',
        borderRadius: '3px',
        background: '#ebebeb',
        width: '100%',
        fontSize: '15px',
        color: 'black',
        display: 'block'
    };


    const Field = React.forwardRef(({ label, type, placeholder }, ref) => {
        return (
            <div>
                <label style={labelStyle} >{label}</label>
                <input className={classes.formControl} ref={ref} placeholder={placeholder} type={type} style={inputStyle} />
            </div>
        );
    });

    const Form = ({ onSubmit }) => {
        const userFirstnameRef = React.useRef();
        const userLastnameRef = React.useRef();
        const userEmailRef = React.useRef();
        const passwordRef = React.useRef();

        const companyNameRef = React.useRef();


        const handleSubmit = e => {
            e.preventDefault();
            const data = {
                userFirstnameRef: userFirstnameRef.current.value,
                userLastnameRef: userLastnameRef.current.value,
                userEmailRef: userEmailRef.current.value,

            };
            onSubmit(data);
        };
        return (
            <form style={formStyle} onSubmit={handleSubmit} >

                {/* <div className={classes.separation}>
                        <div className={classes.product}>Product  </div>
                        <div className={classes.quantity}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity </div>
                        <div className={classes.price}>&nbsp;&nbsp;Subtotal</div>
                    </div> */}


                <div className={classes.subTitle}>All transactions are secure and encrypted.</div>
                {/* <div className={classes.requiredFields}>Shipping Address</div> */}
                <div className={classes.formGroup}>



                    <div className={classes.separationbox}>
                        <div className={classes.selectFirst}>
                            <input type="radio" name="address" value="standard" checked={true} onChange="" /> Credit Card
                        </div>
                        {/* <div className={classes.selectThird} > creditcardlogo</div> */}
                        {/* <div className={classes.selectThird} > creditcardlogo</div> */}

                    </div>




                    <div>


                        <br />
                        <div className={classes.firstnamebox}  > <Field ref={companyNameRef} label="" type="text" placeholder="Card number" />  </div>
                        <br />

                        <div className={classes.firstnamebox}  > <Field ref={companyNameRef} label="" type="text" placeholder="Name on card" />  </div>
                        <br />

                        <div className={classes.separationbox}>
                            <div className={classes.firstnamebox}  > <Field ref={userFirstnameRef} label="" type="text" placeholder="Expiration date (MM / YY)" />  </div>
                            <div className={classes.lastnamebox} > <Field ref={userLastnameRef} label="" type="text" placeholder="Security code" /> </div>
                        </div>




                    </div>
                    <br /><br />
                    <button className={classes.button} style={submitStyle} type="submit" >PAY NOW </button>
                </div>
            </form>
        );
    };

    const handleSubmit = data => {



        const json = JSON.stringify(data, null, 8);

        var event = JSON.parse(json);

        console.log(event);


        if (event.userFirstnameRef !== "") {
            if (event.userLastnameRef !== "") {
                if (event.userEmailRef !== "") {
                    if (event.passwordRef !== "") {
                        console.log("field are filled");
                        console.log(event.userFirstnameRef);
                        console.log(event.password);
                        history.push("/main");
                    }
                }
            }
        }
        else {
            console.log("field not filled");

        }




    };



    return (

        <Container>
            <div className={classes.toolbar} />
            <div className={classes.title} onMouseEnter={function () { reportHoverEvent("CONF_Title") }}> CONFIRMATION </div>
            <div className={classes.container}>

                <div className={classes.leftBox} onMouseEnter={function () { reportHoverEvent("CONF_LeftBox") }}>



                    <div className={classes.form}>
                        <div className="justify-content-center row">
                            <div className="col-lg-6 col-md-8">
                                <div className="tt-item">
                                    <div className="form-default">
                                        {/* <form action="/account/login" id="contactform" method="post" noValidate> */}

                                        <div>
                                            <div style={appStyle}>
                                                {/* <Form onSubmit={handleSubmit} /> */}

                                                <div className={classes.lineBig} onMouseEnter={function () { reportHoverEvent("CONF_IMAGE_Check") }} >
                                                    <img className={classes.tick} src={tick} />
                                                </div>


                                                <br />
                                                <br />
                                                <br />
                                                <div className={classes.lineBig} onMouseEnter={function () { reportHoverEvent("CONF_ThankYou") }}>
                                                    Thank you for your purchase!
                                                </div>

                                                <br />
                                                <br />

                                                <div className={classes.line} onMouseEnter={function () { reportHoverEvent("CONF_YouShould") }}>
                                                    You should receive an order confirmation email shortly.
                                                </div>
                                                <br /> <br />

                                                <div className={classes.line} onMouseEnter={function () { reportHoverEvent("CONF_YouShould") }}>
                                                    <Link className={classes.button} onClick={function () { window.sessionStorage.setItem("trackingActive", "false") }} to={'/accuracyTest'} > CONTINUE </Link>
                                                </div>


                                                {/*
                                                <br /><br /><br />
                                                <div className={classes.line}>
                                                    <Button component={Link} to="/SurveyComponent" className={classes.button}> Continue the study</Button>
                                                </div>
                                                <br /><br />*/}

                                                {/* <div>

                                                    {shopCart.map((product) => (
                                                        <div>
                                                            <div className={classes.singleItemPreview} >

                                                                <div className={classes.productPreview}>
                                                                    <img className={classes.imagePreview} width="5%" height="5%" src={product.image} />
                                                                    <div className={classes.namePreview}> {product.name}  </div>
                                                                </div>


                                                                <div className={classes.quantityPreview}>
                                                                    <div >
                                                                        X {product.q}
                                                                    </div>
                                                                </div>

                                                                <div className={classes.price}> ${product.price * product.q}  </div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    ))}


                                                    <div className={classes.tablerow}>
                                                        <div className={classes.subtotal}>SUBTOTAL</div>
                                                        <div className={classes.subtotalPrice}>${subtotal} </div>
                                                    </div>

                                                    <div className={classes.tablerow}>
                                                        <div className={classes.subtotal}>DELIVERY</div>
                                                        <div className={classes.subtotalPrice}>$100 </div>
                                                    </div>

                                                    <div className={classes.tablerow}>
                                                        <div className={classes.grandTotalTitle}>GRAND TOTAL</div>
                                                        <div className={classes.grandTotal}>${grandTotal} </div>
                                                    </div>
                                                </div> */}


                                            </div>

                                        </div>

                                        <div className="align-self-center col-auto">
                                            <div className={classes.formGroup}>
                                                <div className={classes.additionalLinks}>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

                {/* <div className={classes.rightBox}   >

                    <div>
                        <div className={classes.subtotal}>Your Products</div>

                        {shopCart.map((product) => (

                            <div>
                                <div className={classes.singleItemPreview} >

                                    <div className={classes.productPreview}>
                                        <img className={classes.imagePreview} width="5%" height="5%" src={product.image} />
                                        <div className={classes.namePreview}> {product.name}  </div>
                                    </div>


                                    <div className={classes.quantityPreview}>
                                        <div >
                                            X {product.q}
                                        </div>
                                    </div>

                                    <div className={classes.price}> ${product.price * product.q}  </div>
                                </div>
                                <hr />
                            </div>
                        ))}


                        <div className={classes.tablerow}>
                            <div className={classes.subtotal}>SUBTOTAL</div>
                            <div className={classes.subtotalPrice}>${subtotal} </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.subtotal}>DELIVERY</div>
                            <div className={classes.subtotalPrice}>$100 </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.grandTotalTitle}>GRAND TOTAL</div>
                            <div className={classes.grandTotal}>${grandTotal} </div>
                        </div>
                    </div>

                    <br />

                    <br />
                    <br />




                </div> */}

            </div>
            <br />
            {/* <div className={classes.bottom}> DigitFurns. © 2021 </div> */}


        </Container >




    );
};


export default Confirmation;