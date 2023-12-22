import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import visalogo from './visalogo.png';
import masterlogo from './masterlogo.png';
import aelogo from './americanexpresslogo.png';

import { reportClickEvent, reportHoverEvent } from '../../eventTracking'


const Payment = ({ shopCart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddToCart, onMinusToCart }) => {
    const classes = useStyles();

    const history = useHistory();

    const [disPlayStatus, setDisPlayStatus] = useState(0);




    const TermsDiv = ({ }) => {
        return (
            //after clicked the terms
            <div><button  className={classes.crossButton}  onClick={function () { reportClickEvent("PAYMENT_closeMembershipTermButton"); setDisPlayStatus(0); }} onMouseEnter={function () { reportHoverEvent("PAYMENT_closeMembershipTermButton") }}>X</button>
                <div id="termsWindow" className={classes.divStyle} onScroll={function(){let scr = document.getElementById("termsWindow").scrollTop;console.log(scr);window.sessionStorage.setItem("termsScroll", scr)}}>
                    DigitFurns. PRIVACY STATEMENT

                <div>Commitment to data protection and the protection of your privacy The protection of personal data and your privacy is a top priority for the H&M Group. With this privacy statement we want to give you clear, consistent and transparent information about the collection, use, processing, storage etc. of personal data of customers of the DgitFruns. group.
                    </div><div>For the purposes of this Privacy Policy, “DigitFurns. Customer” means a past, current and potential customer or user of a product or service offered by an DigitFurns. subsidiary or brand, or a visitor to one of our official websites or stores or a member of a loyalty program or community.
                         </div><div>PrinciplesThe DigitFurns. commitment to privacy and data protection is based on the following principles:
                    DigitFurns. uses personal data in a lawful, fair, correct and transparent manner.DigitFurns. does not collect more personal data than is necessary and only for a legitimate purpose.
                       </div><div>DigitFurns. does not store more data than is necessary, nor for longer than is necessary.DigitFurns. protects personal data with appropriate security measures.
                     </div><div>Why do we process your data?We use and process your personal data in connection with you, for example when you buy our products online or in our stores, visit our website or contact our customer service. Examples of personal information include full name, address, email address, phone number, social security number, payment information, your purchase, order, and usage history, IP address, Member ID, and other case-related information (e.g., information you provide when contacting our customer service).
                    In the individual sections of this data protection declaration, you will be informed about the purpose of the respective data processing.
</div><div>Who is responsible for the processing of your personal data?The Swedish company DigitFurns. is primarily responsible for the processing of the personal data in the context of this privacy statement.
                    In each section of this privacy statement you will be informed if instead DigitFurns. is responsible for the processing of your personal data, the attribution of responsibilities and the modalities for exercising rights.
    </div><div>Information on the data protection officer(s) of the DigitFurns.:
                    DigitFurns.ACC Street
                    10638 MunichGermany Company Register:Register Registration number: 000000-0000 Authorizedrepresentative: DigitFurns.VAT number: SE00000000
                    DigitFurns.Address: ACC Street, 106 38 MunichVAT number: 000000
                    The DigitFurns. Data Protection Officer(s) referred to above are referred to individually or collectively as "DigitFurns.", "we", "us" etc. in this privacy notice.
                    In certain circumstances, responsibility for data protection and your privacy is shared with third parties, e.g. B. with banks, financial institutions, postal services or electronic communication providers. Further information can be found in the individual sections of this data protection declaration.
                         </div><div>Where do we process your data?The personal information we collect from you is generally stored in a country within the European Union (EU) or the European Economic Area (EEA), but may be transferred to and processed in a country outside the EU/EEA if necessary will. Any such transfer of your personal information will be in compliance with applicable laws and your statutory rights.
                    From time to time, we may transfer personal data from the EU/EEA to a third country that has not been determined by the European Commission as a safe country for such transfers (adequacy decision). Whenever applicable,DigitFurns. adheres to the  EU Standard Contractual Clauses to ensure comparable protection to that afforded in the EU/EEA or other legal bases for a transfer.
     </div><div>Who has access to your data?Your personal data is available and accessible only to those who need the data for the intended processing purpose. Where necessary, your personal data may be shared with DigitFurns.companies and brands, service providers and contractors (processors and sub-processors) who perform specific tasks on behalf of DigitFurns. and independent third parties.
                    In addition, we may also disclose personal information to third parties if we have reason to believe that the use or disclosure of such information is necessary or expedient to: (i) conduct investigations into possible violations of the law; (ii) identify, contact or take legal action against any person who may be in breach of any agreement with us; (iii) investigate security breaches or cooperate with government authorities in a legal matter; or (iv) protect our rights, safety or property, including to prevent fraud.
                    We reserve the right to port any personal information we hold about you in the event we merge with a third party, are acquired by a third party, or have another business transaction, e.g. a reorganization, or if such a transaction is proposed.
                    </div><div>What is the legal basis for processing?DigitFurns. must not collect, process, use, store, etc. personal data without a valid legal basis. Lawfulness can be derived from your consent, a contract, legal obligations or our legitimate interest as a company. For each specific processing purpose for the processing of personal data that we collect from you, we will tell you on what legal basis this is done and what your rights are and whether the provision of personal data is required by law or necessary for the conclusion of a contract. We also state whether you are obliged to provide the personal data and what the consequences are if you do not provide them.

      </div><div>What rights do you have?Right to information : You have the right to request information about your personal data stored by us at any time. Here you can request your personal data and have it sent to you by e-mail.
                    Right to portability: If DigitFurns. processes your personal data automatically with your consent or based on a corresponding agreement, you have the right to request a copy of your data in a structured, commonly used and machine-readable format, which is sent to you or another party. This only affects the personal data that you have submitted to us.
                    Right to rectification:  You have the right to request rectification of your personal data if it is inaccurate. This includes the right to have incomplete personal data completed. If you have an DigitFurns. account or are a member, you can edit your personal data in your account and membership area.
                    Right to erasure: You have the right to have personal data processed by DigitFurns. erased at any time, except in the following cases:
                    * You are in contact with Customer Service to resolve a matter.* You have placed an order that has not yet been shipped or only partially shipped.* You have outstanding payments at DigitFurns., regardless of the payment method.* You have misused our services in the last four years or there is a suspicion of such misuse.* You have transferred your liabilities to a third party in the last three years (one year for deceased customers).*Your loan application has been rejected within the last three months.* Where you have made purchases, we retain your personal information related to your transaction in accordance with accounting requirements.
                    Right to object to processing of your data based on legitimate interest:You have the right to object to the processing of your personal data based on DigitFurns.'s legitimate interest. DigitFurns. will no longer process the personal data unless we can demonstrate legitimate grounds for processing that outweigh your interests and rights, or to defend legal claims.
                    Right to restriction: You have the right to request that DigitFurns. restricts the processing of your personal data in the following circumstances:
* If you object to processing based on DigitFurns.'s legitimate interest, DigitFurns. will restrict the processing of such data pending verification of legitimate interest.* If you inform us that your personal data is incorrect, DigitFurns. must restrict all processing of the data concerned until it has been clarified whether the personal data is in fact incorrect.* If the processing is unlawful, you can object to the deletion of personal data and instead request that the use of your personal data be restricted.* When DigitFurns. no longer needs the personal data, but it is necessary for you to defend your legal claims.                  </div><div>3.2 The points earned are personal and cannot be transferred to another person or member.
                                    </div><div> How can you exercise your rights?We take data protection very seriously. Therefore, we have dedicated customer service representatives who will deal with your requests regarding your above rights. You can contact them at any time via dataprotection.de@hm.com . If you have an DigitFurns. account or are an DigitFurns. member, you can exercise your right of access, your right to portability and your right to rectification on the relevant pages in your account. You can also delete your account there.
                                          </div><div>.Data Protection Officer:We have appointed a data protection officer to ensure that we process your personal data openly, accurately and properly. You can reach our data protection officer at dataprotection.de@hm.com . Please include "DPO" in the subject line.      </div><div> 4 POINTS, MEMBERSHIP LEVELS AND BONUS CHECKS4.1 The collected points count towards achieving the status "Plus Member" as well as for bonus checks (discount vouchers).
                </div><div>Updating our privacy policy:From time to time we need to update our privacy policy. The latest version of the privacy policy is always available on our website. We will inform you about any significant changes to the data protection declaration.
                      </div>
                    <div>The history of changes can be found in the Changes section of this privacy policy.</div>






                </div>
            </div>
        );
    }

    const NoTermsDiv = ({ displayMembershipTerms }) => {
        return (
            <div>
            </div>
        );
    }

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
        borderBottom: '2px solid #A2A2A2',
        borderTop: '1px  #EAEAEA',
        borderLeft: '1px  #EAEAEA',
        borderRight: '1px  #EAEAEA',
        borderRadius: '3px',
        boxSizing: 'border-box',
        width: '100%',
        height: '50px',

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
                // userFirstnameRef: userFirstnameRef.current.value,
                // userLastnameRef: userLastnameRef.current.value,
                // userEmailRef: userEmailRef.current.value,

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


                <div className={classes.subTitle} onMouseEnter={function () { reportHoverEvent("PAYMENT_AllTransactions") }}>All transactions are secure and encrypted.</div>
                <br />{/* <div className={classes.requiredFields}>Shipping Address</div> */}
                <div className={classes.formGroup}>



                    <div className={classes.separationbox}>
                        <div className={classes.selectFirst} onMouseEnter={function () { reportHoverEvent("PAYMENT_SelectCCard") }}>
                            <input type="radio" name="address" value="standard" checked={true} onChange="" /> Credit Card
                        </div>

                        <div className={classes.selectFirst} onMouseEnter={function () { reportHoverEvent("PAYMENT_SelectDCard") }}>
                            <input type="radio" name="address" value="standard" checked={true} onChange="" /> Debit Card
                        </div>

                        <div className={classes.selectThird} onMouseEnter={function () { reportHoverEvent("PAYMENT_IMAGE_CreditLogo") }}>  <img src={masterlogo} /></div>
                        {/* <div className={classes.selectThird} > creditcardlogo</div> */}
                        {/* <div className={classes.selectThird} > creditcardlogo</div> */}

                    </div>




                    <div>


                        <br />
                        <div className={classes.firstnamebox} onClick={function () { reportClickEvent("PAYMENT_Cardnumber") }} onMouseEnter={function () { reportHoverEvent("PAYMENT_CardNumber") }}> <Field ref={companyNameRef} label="" type="text" placeholder="Card number * " />  </div>
                        <br />

                        <div className={classes.firstnamebox} onClick={function () { reportClickEvent("PAYMENT_NameOnCard") }} onMouseEnter={function () { reportHoverEvent("PAYMENT_NameOnCard") }} > <Field ref={companyNameRef} label="" type="text" placeholder="Name on card *" />  </div>
                        <br />

                        <div className={classes.title_header}>
                            Expiration date
                        </div>

                        <div className={classes.separationbox}>
                            <div className={classes.firstnamebox} onClick={function () { reportClickEvent("PAYMENT_ExprationDate") }} onMouseEnter={function () { reportHoverEvent("PAYMENT_ExpirationDate") }}> <Field ref={userFirstnameRef} label="" type="text" placeholder="MM *" />  </div>
                            <div className={classes.firstnamebox} onClick={function () { reportClickEvent("PAYMENT_ExprationDate") }} onMouseEnter={function () { reportHoverEvent("PAYMENT_ExpirationDate") }}> <Field ref={userFirstnameRef} label="" type="text" placeholder="YY *" />  </div>
                            <div className={classes.lastnamebox} onClick={function () { reportClickEvent("PAYMENT_SecurityCode") }} onMouseEnter={function () { reportHoverEvent("PAYMENT_SecurityCode") }}> <Field ref={userLastnameRef} label="" type="text" placeholder="Security code *" /> </div>
                        </div>




                    </div>
                    <br /><br />
                    <button className={classes.button} style={submitStyle} type="submit" onClick={function () { reportClickEvent("PAYMENT_PayNow"); }} onMouseEnter={function () { reportHoverEvent("PAYMENT_PayNow") }}>PAY NOW </button>
                    <br /><br /><br /><br />

                    <div className={classes.title_header_right}>
                        *All data is encrypted
                    </div>
                    {/* <div className={classes.title_header_right}> */}
                    <div className={classes.title_header2}>
                        <br /> <br />
You are using DigitFurns. Payments, if you finish the payment process it means you agree to<button className={classes.serviceConditionButton} onClick={function () { reportClickEvent("PAYMENTs_serviceConditionButton"); setDisPlayStatus(1); }} onMouseEnter={function () { reportHoverEvent("REGISTER_serviceConditionButton") }}>  the service condition.</button>
                    </div>

                    <div className={classes.message3}>
                        {disPlayStatus ? (
                            <TermsDiv />
                        ) : (
                                <NoTermsDiv />
                            )}
                    </div>


                </div>
            </form>
        );
    };

    const handleSubmit = data => {



        const json = JSON.stringify(data, null, 8);

        var event = JSON.parse(json);

        console.log(event);

        history.push("/confirmation");



        // if (event.userFirstnameRef !== "") {
        //     if (event.userLastnameRef !== "") {
        //         if (event.userEmailRef !== "") {
        //             if (event.passwordRef !== "") {
        //                 console.log("field are filled");
        //                 console.log(event.userFirstnameRef);
        //                 console.log(event.password);
        //                 history.push("/confirmation");
        //             }
        //         }
        //     }
        // }
        // else {
        //     console.log("field not filled");



        // }




    };



    return (
        // <Container>
        //   <div className={classes.toolbar} />
        //   <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        //   { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        // </Container>

        <Container>
            <div className={classes.toolbar} />
            <div className={classes.title} onMouseEnter={function () { reportHoverEvent("PAYMENT_Title") }}> PAYMENT </div>
            <div className={classes.container}>

                <div className={classes.leftBox} onMouseEnter={function () { reportHoverEvent("PAYMENT_LeftBox") }}>



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

                <div className={classes.rightBox} onMouseEnter={function () { reportHoverEvent("PAYMENT_RightBox") }}>

                    <div>
                        <div className={classes.subtotal} onMouseEnter={function () { reportHoverEvent("PAYMENT_YourProducts") }}>Your Products</div>

                        {shopCart.map((product) => (

                            <div>
                                <div className={classes.singleItemPreview} >

                                    <div className={classes.productPreview}>
                                        <img className={classes.imagePreview} width="5%" height="5%" src={product.image} onMouseEnter={function () { reportHoverEvent("PAYMENT_IMAGE_" + product.name) }} />
                                        <div className={classes.namePreview} onMouseEnter={function () { reportHoverEvent("PAYMENT_PAYMENT_ProdName-" + product.name) }}> {product.name}  </div>
                                    </div>


                                    <div className={classes.quantityPreview} onMouseEnter={function () { reportHoverEvent("PAYMENT_Quantity-" + product.name) }}>
                                        <div >
                                            X {product.q}
                                        </div>
                                    </div>

                                    <div className={classes.price} onMouseEnter={function () { reportHoverEvent("PAYMENT_Price-" + product.name) }}> ${product.price * product.q}  </div>
                                </div>
                                <hr />
                            </div>
                        ))}


                        <div className={classes.tablerow}>
                            <div className={classes.subtotal} onMouseEnter={function () { reportHoverEvent("PAYMENT_SubtotalText") }}>SUBTOTAL</div>
                            <div className={classes.subtotalPrice} onMouseEnter={function () { reportHoverEvent("PAYMENT_SubtotalPrice") }}>${subtotal} </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.subtotal} onMouseEnter={function () { reportHoverEvent("PAYMENT_DeliveryText") }}>DELIVERY</div>
                            <div className={classes.subtotalPrice} onMouseEnter={function () { reportHoverEvent("PAYMENT_DeliveryPrice") }}>$100 </div>
                        </div>

                        <div className={classes.tablerow}>
                            <div className={classes.grandTotalTitle} onMouseEnter={function () { reportHoverEvent("PAYMENT_GrandTotalText") }}>GRAND TOTAL</div>
                            <div className={classes.grandTotal} onMouseEnter={function () { reportHoverEvent("PAYMENT_GrandTotalPrice") }}>${grandTotal} </div>
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


export default Payment;