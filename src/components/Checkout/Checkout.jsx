import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useHistory } from "react-router-dom";

import {reportClickEvent,reportHoverEvent} from '../../eventTracking'


const Checkout = ({ shopCart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddToCart, onMinusToCart }) => {
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


                <div className={classes.subTitle} onMouseEnter={function(){reportHoverEvent("CHECKOUT_ShipAdr")}}>SHIPPING ADDRESS </div>
                {/* <div className={classes.requiredFields}>Shipping Address</div> */}
                <div className={classes.formGroup}>

                    <div className={classes.separationbox}>
                        <div className={classes.firstnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Firstname");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Firstname")}}> <Field ref={userFirstnameRef} label="" type="text" placeholder="First name" />  </div>
                        <div className={classes.lastnamebox}  onClick={() =>{reportClickEvent("CHECKOUT_Lastname");}}onMouseEnter={function(){reportHoverEvent("CHECKOUT_Lastname")}}> <Field ref={userLastnameRef} label="" type="text" placeholder="Last name" /> </div>
                    </div>

                    <div className={classes.separationbox}>
                        <div className={classes.requiredleft}  > *Required  </div>
                        <div className={classes.requiredright} > *Required </div>
                    </div>

                    <br />
                    <div className={classes.firstnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Company");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Company")}} > <Field ref={companyNameRef} label="" type="text" placeholder="Company (optional)" />  </div>
                    <br />

                    <div className={classes.separationbox}>
                        <div className={classes.firstnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Street");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Street")}}> <Field ref={userFirstnameRef} label="" type="text" placeholder="Street Address" />  </div>
                        <div className={classes.lastnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Unit");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Unit")}}> <Field ref={userLastnameRef} label="" type="text" placeholder="Suite/ Unit/ Etc" /> </div>
                    </div>

                    <div className={classes.separationbox}>
                        <div className={classes.requiredleft}  > *Required  </div>
                        <div className={classes.requiredright} >  </div>
                    </div>

                    <div className={classes.firstnamebox} onClick={() =>{reportClickEvent("CHECKOUT_District");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_District")}} > <Field ref={userEmailRef} label="" type="text" placeholder="District" />  </div>
                    <div className={classes.requiredleft}  > *Required  </div>

                    <br />

                    <div className={classes.separationbox}>
                        <div className={classes.firstnamebox}  onClick={() =>{reportClickEvent("CHECKOUT_Country");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Country")}}>
                            <select data-ref="field" className={classes.countrySelect} id="dwfrm_shipping_shippingAddress_addressFields_country" name="dwfrm_shipping_shippingAddress_addressFields_country" required="" aria-required="true" data-event-change="onChange" data-tau="address_country" aria-describedby="dwfrm_shipping_shippingAddress_addressFields_country-error" data-event-blur="validate">
                                <option value="" data-id="0"> Select a country</option>
                                <option value="AL" data-id="1">Albania</option>
                                <option value="AS" data-id="2">American Samoa</option>
                                <option value="AD" data-id="3">Andorra</option>
                                <option value="AO" data-id="4">Angola</option>
                                <option value="AI" data-id="5">Anguilla</option>
                                <option value="AG" data-id="6">Antigua and Barbuda</option>
                                <option value="AM" data-id="7">Armenia</option>
                                <option value="AW" data-id="8">Aruba</option>
                                <option value="AU" data-id="9">Australia</option>
                                <option value="AT" data-id="10">Austria</option>
                                <option value="AZ" data-id="11">Azerbaijan</option>
                                <option value="BS" data-id="12">Bahamas</option>
                                <option value="BH" data-id="13">Bahrain</option>
                                <option value="BD" data-id="14">Bangladesh</option>
                                <option value="BB" data-id="15">Barbados</option>
                                <option value="BE" data-id="16">Belgium</option>
                                <option value="BJ" data-id="17">Benin</option>
                                <option value="BM" data-id="18">Bermuda</option>
                                <option value="BA" data-id="19">Bosnia and Herzegovina</option>
                                <option value="BW" data-id="20">Botswana</option>
                                <option value="BV" data-id="21">Bouvet Island</option>
                                <option value="IO" data-id="22">British Indian Ocean Territory</option>
                                <option value="BG" data-id="23">Bulgaria</option>
                                <option value="BI" data-id="24">Burundi</option>
                                <option value="KH" data-id="25">Cambodia</option>
                                <option value="CM" data-id="26">Cameroon</option>
                                <option value="CA" data-id="27">Canada</option>
                                <option value="CV" data-id="28">Cape Verde</option>
                                <option value="KY" data-id="29">Cayman Islands</option>
                                <option value="CN" data-id="30">China</option>
                                <option value="CX" data-id="31">Christmas Island</option>
                                <option value="CC" data-id="32">Cocos (Keeling) Islands</option>
                                <option value="KM" data-id="33">Comoros</option>
                                <option value="CG" data-id="34">Congo</option>
                                <option value="CK" data-id="35">Cook Islands</option>
                                <option value="CR" data-id="36">Costa Rica</option>
                                <option value="HR" data-id="37">Croatia (Hrvatska)</option>
                                <option value="CY" data-id="38">Cyprus</option>
                                <option value="CZ" data-id="39">Czech Republic</option>
                                <option value="DK" data-id="40">Denmark</option>
                                <option value="DO" data-id="41">Dominican Republic</option>
                                <option value="TL" data-id="42">East Timor</option>
                                <option value="EG" data-id="43">Egypt</option>
                                <option value="SV" data-id="44">El Salvador</option>
                                <option value="GQ" data-id="45">Equatorial Guinea</option>
                                <option value="EE" data-id="46">Estonia</option>
                                <option value="FK" data-id="47">Falkland Islands (Malvinas)</option>
                                <option value="FO" data-id="48">Faroe Islands</option>
                                <option value="FJ" data-id="49">Fiji</option>
                                <option value="FI" data-id="50">Finland</option>
                                <option value="FR" data-id="51">France</option>
                                <option value="GF" data-id="52">French Guiana</option>
                                <option value="PF" data-id="53">French Polynesia</option>
                                <option value="GM" data-id="54">Gambia</option>
                                <option value="GE" data-id="55">Georgia</option>
                                <option value="DE" data-id="56">Germany</option>
                                <option value="GI" data-id="57">Gibraltar</option>
                                <option value="GR" data-id="58">Greece</option>
                                <option value="GL" data-id="59">Greenland</option>
                                <option value="GD" data-id="60">Grenada</option>
                                <option value="GP" data-id="61">Guadeloupe</option>
                                <option value="GU" data-id="62">Guam</option>
                                <option value="GN" data-id="63">Guinea</option>
                                <option value="GW" data-id="64">Guinea-Bissau</option>
                                <option value="GY" data-id="65">Guyana</option>
                                <option value="HM" data-id="66">Heard and McDonald Islands</option>
                                <option value="HN" data-id="67">Honduras</option>
                                <option value="HN" data-id="67">Hong Kong</option>
                                <option value="HU" data-id="68">Hungary</option>
                                <option value="IS" data-id="69">Iceland</option>
                                <option value="IN" data-id="70">India</option>
                                <option value="IE" data-id="71">Ireland</option>
                                <option value="IL" data-id="72">Israel</option>
                                <option value="JP" data-id="73">Japan</option>
                                <option value="KZ" data-id="74">Kazakhstan</option>
                                <option value="KE" data-id="75">Kenya</option>
                                <option value="KI" data-id="76">Kiribati</option>
                                <option value="KR" data-id="77">Korea (South)</option>
                                <option value="KW" data-id="78">Kuwait</option>
                                <option value="KG" data-id="79">Kyrgyzstan</option>
                                <option value="LA" data-id="80">Laos</option>
                                <option value="LV" data-id="81">Latvia</option>
                                <option value="LS" data-id="82">Lesotho</option>
                                <option value="LI" data-id="83">Liechtenstein</option>
                                <option value="LT" data-id="84">Lithuania</option>
                                <option value="LU" data-id="85">Luxembourg</option>
                                <option value="MO" data-id="86">Macau</option>
                                <option value="MK" data-id="87">Macedonia</option>
                                <option value="MG" data-id="88">Madagascar</option>
                                <option value="MW" data-id="89">Malawi</option>
                                <option value="MV" data-id="90">Maldives</option>
                                <option value="MT" data-id="91">Malta</option>
                                <option value="MH" data-id="92">Marshall Islands</option>
                                <option value="MQ" data-id="93">Martinique</option>
                                <option value="MR" data-id="94">Mauritania</option>
                                <option value="MU" data-id="95">Mauritius</option>
                                <option value="YT" data-id="96">Mayotte</option>
                                <option value="FM" data-id="97">Micronesia</option>
                                <option value="MD" data-id="98">Moldova</option>
                                <option value="MC" data-id="99">Monaco</option>
                                <option value="MN" data-id="100">Mongolia</option>
                                <option value="MS" data-id="101">Montserrat</option>
                                <option value="MZ" data-id="102">Mozambique</option>
                                <option value="NR" data-id="103">Nauru</option>
                                <option value="NP" data-id="104">Nepal</option>
                                <option value="NL" data-id="105">Netherlands</option>
                                <option value="AN" data-id="106">Netherlands Antilles</option>
                                <option value="NC" data-id="107">New Caledonia</option>
                                <option value="NZ" data-id="108">New Zealand (Aotearoa)</option>
                                <option value="NE" data-id="109">Niger</option>
                                <option value="NU" data-id="110">Niue</option>
                                <option value="NF" data-id="111">Norfolk Island</option>
                                <option value="MP" data-id="112">Northern Mariana Islands</option>
                                <option value="NO" data-id="113">Norway</option>
                                <option value="OM" data-id="114">Oman</option>
                                <option value="PK" data-id="115">Pakistan</option>
                                <option value="PW" data-id="116">Palau</option>
                                <option value="PH" data-id="117">Philippines</option>
                                <option value="PN" data-id="118">Pitcairn</option>
                                <option value="PL" data-id="119">Poland</option>
                                <option value="PT" data-id="120">Portugal</option>
                                <option value="RO" data-id="121">Romania</option>
                                <option value="RU" data-id="122">Russian Federation</option>
                                <option value="RW" data-id="123">Rwanda</option>
                                <option value="GS" data-id="124">S. Georgia and S. Sandwich Isls.</option>
                                <option value="KN" data-id="125">Saint Kitts and Nevis</option>
                                <option value="LC" data-id="126">Saint Lucia</option>
                                <option value="WS" data-id="127">Samoa</option>
                                <option value="SM" data-id="128">San Marino</option>
                                <option value="ST" data-id="129">Sao Tome and Principe</option>
                                <option value="SA" data-id="130">Saudi Arabia</option>
                                <option value="SN" data-id="131">Senegal</option>
                                <option value="SC" data-id="132">Seychelles</option>
                                <option value="SK" data-id="133">Slovak Republic</option>
                                <option value="SI" data-id="134">Slovenia</option>
                                <option value="SB" data-id="135">Solomon Islands</option>
                                <option value="ES" data-id="136">Spain</option>
                                <option value="LK" data-id="137">Sri Lanka</option>
                                <option value="PM" data-id="138">St. Pierre and Miquelon</option>
                                <option value="SJ" data-id="139">Svalbard and Jan Mayen Islands</option>
                                <option value="SZ" data-id="140">Swaziland</option>
                                <option value="SE" data-id="141">Sweden</option>
                                <option value="CH" data-id="142">Switzerland</option>
                                <option value="TJ" data-id="143">Tajikistan</option>
                                <option value="TZ" data-id="144">Tanzania</option>
                                <option value="TG" data-id="145">Togo</option>
                                <option value="TK" data-id="146">Tokelau</option>
                                <option value="TT" data-id="147">Trinidad and Tobago</option>
                                <option value="TR" data-id="148">Turkey</option>
                                <option value="TC" data-id="149">Turks and Caicos Islands</option>
                                <option value="TV" data-id="150">Tuvalu</option>
                                <option value="UM" data-id="151">US Minor Outlying Islands</option>
                                <option value="UA" data-id="152">Ukraine</option>
                                <option value="UG" data-id="153">Uganda</option>
                                <option value="AE" data-id="154">United Arab Emirates</option>
                                <option value="GB" data-id="155" selected="">United Kingdom</option>
                                <option value="UY" data-id="156">Uruguay</option>
                                <option value="UZ" data-id="157">Uzbekistan</option>
                                <option value="VU" data-id="158">Vanuatu</option>
                                <option value="VA" data-id="159">Vatican City State (Holy See)</option>
                                <option value="VN" data-id="160">Viet Nam</option>
                            </select>
                        </div>

                        <div className={classes.lastnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Region");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Region")}}> <Field ref={userLastnameRef} label="" type="text" placeholder="Region" /> </div>
                    </div>
                    <div className={classes.requiredleft}  > *Required  </div>


                    <div className={classes.firstnamebox} onClick={() =>{reportClickEvent("CHECKOUT_Phone");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Phone")}}> <Field ref={companyNameRef} label="" type="text" placeholder="Phone" />  </div>
                    <div className={classes.requiredleft}  > *Required  </div>

                    <br />



                    <div className={classes.select} onClick={() =>{reportClickEvent("CHECKOUT_Shipping");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Shipping")}}>SHIPPING OPTIONS </div>
                    {/* <Field ref={userFirstnameRef} label="" type="radio" placeholder="Street Address" value="Please Select"   />   */}

                    <div className={classes.select}>
                        <input type="radio" name="address" value="no_select" checked={false} onChange="" onClick={() =>{reportClickEvent("CHECKOUT_SHIP-PlsSelect");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_SHIP-PlsSelect")}}/> Please select a shipping method
                    <br />
                        <input type="radio" name="address" value="standard" checked={true} onChange="" onClick={() =>{reportClickEvent("CHECKOUT_SHIP-Standard");}}onMouseEnter={function(){reportHoverEvent("CHECKOUT_SHIP-Standard")}}/> Standard Delivery: Free
                        </div>

                    <div>

                    </div>
                    <br /><br />
                    <button className={classes.button} style={submitStyle} type="submit" onClick={() =>{reportClickEvent("CHECKOUT_Continue");}} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Continue")}}>CONTINUE</button>
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
                        history.push("/payment");
                    }
                }
            }
        }
        else {
            console.log("field not filled");

        }




    };



    return (
        // <Container>
        //   <div className={classes.toolbar} />
        //   <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        //   { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        // </Container>

        <Container>
            <div className={classes.toolbar} />
            <div className={classes.title} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Title")}}> CHECKOUT </div>
            <div className={classes.container}>

                <div className={classes.leftBox} onMouseEnter={function(){reportHoverEvent("CHECKOUT_LeftBox")}} >



                    <div className={classes.form}>
                        <div className="justify-content-center row">
                            <div className="col-lg-6 col-md-8">
                                <div className="tt-item">
                                    <div className="form-default">
                                        {/* <form action="/account/login" id="contactform" method="post" noValidate> */}

                                        <div>
                                            <div style={appStyle}>
                                                <Form onSubmit={handleSubmit} />
                                            </div>

                                        </div>

                                        <div className="align-self-center col-auto">
                                            <div className={classes.formGroup}>
                                                <div className={classes.additionalLinks}>

                                                </div>
                                            </div>
                                        </div>
                                        {/* 
                                            <div className={classes.formGroup}>
                                                <label htmlFor="loginInputName">FIRST NAME *</label>
                                                <div className={classes.requiredFields}>* Required Fields</div>


                                                <input type="text" name="name" id="loginInputName" className={classes.formControl} placeholder="Enter First Name" required />
                                            </div>
                                            <div className={classes.formGroup}><label htmlFor="loginLastName">LAST NAME *</label><input type="text" name="lastName" id="loginLastName" className={classes.formControl} placeholder="Enter Last Name" required /></div>
                                            <div className={classes.formGroup}><label htmlFor="loginInputEmail">E-MAIL *</label><input type="text" name="email" id="loginInputEmail" className={classes.formControl} placeholder="Enter E-mail" required /></div>
                                            <div className={classes.formGroup}><label htmlFor="loginInputPassword">PASSWORD *</label><input type="password" name="password" className={classes.formControl} id="loginInputPassword" placeholder="Enter Password" required /></div>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <button className={classes.button}>REGISTER</button>
                                                </div>
                                                <div className="align-self-center col-auto">
                                                    <div className={classes.formGroup}>
                                                        <div className={classes.additionalLinks}>
                                                            <div>or <a href="/shop">Return to Store</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

                <div className={classes.rightBox}   onMouseEnter={function(){reportHoverEvent("CHECKOUT_RightBox")}}>

                    <div>
                        <div className={classes.subtotal}>Your Products</div>

                        {shopCart.map((product) => (

                            <div>
                                <div className={classes.singleItemPreview} >

                                    <div className={classes.productPreview}>
                                        <img className={classes.imagePreview} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Image-" + product.name)}}width="5%" height="5%" src={product.image} />
                                        <div className={classes.namePreview} onMouseEnter={function(){reportHoverEvent("CHECKOUT_ProdName-" + product.name)}}> {product.name}  </div>
                                    </div>


                                    <div className={classes.quantityPreview} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Quantity-" + product.name)}}>
                                        <div >
                                          X {product.q}
                                        </div>
                                    </div>

                                    <div className={classes.price} onMouseEnter={function(){reportHoverEvent("CHECKOUT_Price-" + product.name)}}> ${product.price * product.q}  </div>
                                </div>
                                <hr />
                            </div>
                        ))}


                        <div className={classes.tablerow}>
                            <div className={classes.subtotal} onMouseEnter={function(){reportHoverEvent("CHECKOUT_SubtotalText")}}>SUBTOTAL</div>
                            <div className={classes.subtotalPrice}onMouseEnter={function(){reportHoverEvent("CHECKOUT_SubtotalPrice")}}>${subtotal} </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.subtotal} onMouseEnter={function(){reportHoverEvent("CHECKOUT_DeliveryText")}}>DELIVERY</div>
                            <div className={classes.subtotalPrice}onMouseEnter={function(){reportHoverEvent("CHECKOUT_DeiveryPrice")}}>$100 </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.grandTotalTitle} onMouseEnter={function(){reportHoverEvent("CHECKOUT_GrandTotalText")}}>GRAND TOTAL</div>
                            <div className={classes.grandTotal} onMouseEnter={function(){reportHoverEvent("CHECKOUT_GrandTotalPrice")}}>${grandTotal} </div>
                        </div>
                    </div>

                    <br />

                    <br />
                    <br />

                    {/* <button className={classes.selectButton}> PROCEED TO CHECKOUT</button> */}


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



        </Container >




    );
};


export default Checkout;