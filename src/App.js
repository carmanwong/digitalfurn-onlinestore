import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import StartPage from "./components/startPage.js";
import Consent from "./components/Consent.js";

import ConsentPage from "./components/ConsentPage.js";
import InBetween from "./components/InBetween";
import { products_database } from './components/Productdatabase/Productdatabase';
import Tracker from "./components/Tracker";
import AccuracyTest from "./components/accuracyTest.js";

import SurveyComponent from "./components/SurveyComponent.js"




import { Products, Navbar, Cart, Payment, Confirmation, Checkout, Register, Login, Main, Sale, Newin, Livingroom, Bedroom, Accessories, ProductDisplay } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CloseOutlined } from '@material-ui/icons';

const App = () => {
    let userInfo = {
        userName: "carman wong",
        emailAdress: "carman_wong@example.com",
        userID: 0,
        condition: 0,
    };



    const [products, setProducts] = useState([]);
    const [shopCart, setShopCart] = useState([]);
    const [shopCartLen, setShopCartLen] = useState(0);
    const [UserFirstName, setUserFirstName] = useState(" ");
    const [UserLastName, setUserLastName] = useState(" ");
    const [userEmail, setUserEmail] = useState(" ");
    const [loginStatus, setloginStatus] = useState(0);
    const [cart, setCart] = useState({});


    window.onload = function () {

        window.sessionStorage.clear();

        window.sessionStorage.setItem("hoverEvents", "")
        window.sessionStorage.setItem("clickEvents", "")


        const dataLoggingInterval = setInterval(sendData, 33);
        console.log("loggin interval set")

    }

    
    

    ////moved
    /*
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    *////
    let width;
    let height;

    ////added
    let gazeData;
    let startTime;
    ////


    let marginTop = window.screenTop;
    let marginLeft = window.screenLeft;

    let yScroll;

    let clicked

    window.addEventListener("click", function(event) {
        clicked = true;
    });

    const [trackState, setTrackState] = useState(
        {
            timestamp: null,

            //// added
            userID: null,
            currentUsername: null,
            currentEmail: null,
            currentPassword: null,
            ////

            currentPage: "New In",

            ////removed
            //insideProduct: false,
            //spamInbox: [],
            //mailNrBadge: 0,
            //alerted: false,
            //allInboxEmpty: false,

            //progress: false,
            //spam: false,
            ////

            marginToScreenLeft: marginLeft,
            marginToScreenTop: marginTop,
            mousePosXPlain: null,
            mousePosYPlain: null,
            mousePosXTransform: null,
            mousePosYTransform: null,

            browserWidth: null,
            browserHeight: null,
            pageScrollX: 0,
            pageScrollY: 0,

            ////added
            gazeX: null,
            gazeY: null,
            gazeXshifted: null,
            gazeYshifted: null,
            headX: null,
            headY: null,
            headZ: null,
            headYaw: null,
            headPitch: null,
            headRoll: null,

            hoverEvents: null,
            clickEvents: null,

            mouseClickX: null,
            mouseClickY: null,

            termsScroll: null,
            startTime: -1,


            ////

        }
    );



    const startCalibration = () => {
        console.log("funktioniert")                                        //GazeRecorder Einbindung
        window.GazeCloudAPI.APIKey = "GazeBehavior_NonCommercialUse";
        window.GazeCloudAPI.StartEyeTracking();
        window.GazeCloudAPI.OnCalibrationComplete = () => {
            console.log("gaze Calibration Complete");
            this.startTracking();
        };
    };

    const startTracking = () => {                                             //Frequenz und Sendeintervalle
        this.collectionInterval = setInterval(this.collectStates, 33);    //angepasst von 250
        // this.sendingIntervall = setInterval(this.sendData, 3000);
    };

    ////Added
   


    let loggingStarted = false;
    
    const initLogging = () => {   
        if (loggingStarted === false) {
            
            loggingStarted = true;
            console.log("init logging"); 


            const today_raw = new Date();
            const today = today_raw.toISOString().split('T')[0]
            const time = today_raw.getHours() + "_" + today_raw.getMinutes() + "_" + today_raw.getSeconds();
            startTime = today + "_" + time

            trackState.startTime = startTime;



            const userID = Math.floor(Math.random(999999)*899999 + 100000);


            trackState.userID = userID;
            window.sessionStorage.setItem("useridnr", userID.toString());

            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + window.sessionStorage.getItem("useridnr"))

            window.addEventListener("scroll", function(event){

                trackState.pageScrollX = Math.round(window.scrollX);
                trackState.pageScrollY = Math.round(window.scrollY);
            });

            window.addEventListener("mousemove", function (event) {
                trackState.mousePosXPlain = event.clientX;
                trackState.mousePosYPlain = event.clientY;

                trackState.mousePosXTransform = event.clientX + window.scrollX;
                trackState.mousePosYTransform = event.clientY + window.scrollY;
            });




        }




    };



    ////

    let packageCounter = 0;
    let packages = [];

    const sendData = async () => {

        if (window.sessionStorage.getItem("trackingActive") === "true") {
            initLogging()
        } else {
            loggingStarted = false;
        }

        //console.log(packages)

        width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        height =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;





        trackState.marginToScreenLeft = window.screenLeft;
        trackState.marginToScreenTop = window.screenTop;
        trackState.browserWidth = width;
        trackState.browserHeight = height;

        const path = window.location.pathname.split("/");
        trackState.currentPage = path[path.length - 1]


        gazeData = JSON.parse(window.sessionStorage.getItem("GazeData"));
        //console.log(gazeData);

        if (gazeData) {


            trackState.gazeX = gazeData.GazeX;
            trackState.gazeY = gazeData.GazeY;
            trackState.gazeXshifted = gazeData.GazeX + window.scrollX;
            trackState.gazeYshifted = gazeData.GazeY + window.scrollY;
            trackState.headX = gazeData.HeadX;
            trackState.headY = gazeData.HeadY;
            trackState.headZ = gazeData.HeadZ;
            trackState.headYaw = gazeData.HeadYaw;
            trackState.headPitch = gazeData.HeadPitch;
            trackState.headRoll = gazeData.HeadRoll;
            trackState.gazeValid = gazeData.state;

        }

        if(clicked){
            trackState.mouseClickX = trackState.mousePosXPlain;
            trackState.mouseClickY = trackState.mousePosYPlain;
            clicked = false;
        } else {
            trackState.mouseClickX = null;
            trackState.mouseClickY = null;
        }


        trackState.currentUsername  = window.sessionStorage.getItem("currentUsername");
        trackState.currentPassword  = window.sessionStorage.getItem("currentPassword");
        trackState.currentEmail  = window.sessionStorage.getItem("currentEmail");


        trackState.timestamp = Date.now();

        let hoverArray = window.sessionStorage.getItem("hoverEvents").split("/");
        hoverArray.shift();
        trackState.hoverEvents = hoverArray;


        let clickArray = window.sessionStorage.getItem("clickEvents").split("/");
        clickArray.shift();
        trackState.clickEvents = clickArray;

        trackState.termsScroll = window.sessionStorage.getItem("termsScroll");
        trackState.privacyScroll = window.sessionStorage.getItem("privacyScroll");


        if(loggingStarted  === true){


            //packages.push({test: trackState.timestamp})
            packages.push(Object.assign({}, trackState));

            //console.log(packages)



            if (packageCounter > 24) {
                packageCounter = 0;
                const send = JSON.stringify(packages);
                //console.log(send)
                packages = [];

                const post = await fetch("http://localhost:3333",								//{o}
				//const post = await fetch("https://shopping-study.ddns.net:444",
                    {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: send// body data type must match "Content-Type" header
                    });



                packages = [];


            }

            packageCounter++;



        }

        window.sessionStorage.setItem("hoverEvents", "")
        window.sessionStorage.setItem("clickEvents", "")




    };




    const updateUserInfo = (adress, name) => {
        userInfo.userName = name;
        userInfo.emailAdress = adress;
    };

    const setUserID = (userID) => {
        userInfo.userID = userID;
    };

    const updateCondition = (condition, userID) => {
        userInfo.condition = condition;
        userInfo.userID = userID;
    }


    const handleLogin = async (loginStatus, userEmail, userFirstName, userLastName) => {
        console.log("Appjs loginStatus is" + loginStatus);
        console.log("Appjs userEmail is" + userEmail);
        console.log("Appjs userFirstName is" + userFirstName);

        setUserFirstName(userFirstName);
        setUserLastName(userLastName);
        setUserEmail(userEmail);
        setloginStatus(loginStatus);

    }






    const handleAddToCart = async (productId, quantity) => {
        console.log(productId + "____alslkdalskdlas")


        //if (quantity === 1) {
            
            console.log("Add item/ " + quantity + " quantity");
            let a = [];
            let q = 1;
            
            let shopCartExistence = 0;
            let index = 0;

            products.map((product) => {

                

                //This is for looping the product added, to the product list for id)
                if (product.id === productId) {


                    console.log("productID identical")

                    //check if the item existed at shopCart already
                    shopCart.map((items => {
                        if (items.id === productId) {
                            q = items.q + quantity;
                            q = (q > 0) ? q : 0;
                            shopCartExistence = 1;
                            index = items.arrayid;
                        }
                    }
                    ));
                    console.log("shopcart exist after the check:" + shopCartExistence);


                    a = {
                        arrayid: shopCart.length,
                        q: q,
                        id: product.id,
                        image: product.image,
                        type: product.type,
                        name: product.name,
                        description: product.description,
                        price: product.price
                    };

                    //create if not existed
                    if (shopCartExistence === 0) {
                        let newList = shopCart.concat(a);
                        setShopCart(newList, () => { });
                        setShopCartLen(shopCart.length +1);
                    }
                    else {
                        const updateCart = [...shopCart];
                        updateCart[index].q = q;
                        setShopCart(updateCart);

                    }
                } else {
                    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                }
            })

        //}



        /*
        else if (quantity === 0) {
            console.log("Mins 1 quantity!");

            let a = [];
            let q = 1;
            let shopCartExistence = 0;
            let index = 0;

            products.map((product) => {

                const updateCart = [...shopCart];


                //This is for looping the product added, to the product list for id)
                if (product.id === productId) {

                    //check if the item existed at shopCart already
                    shopCart.map((items => {
                        if (items.id == productId) {
                            q = items.q - 1;

                            if(q < 0){
                                q = 0
                            }

                            console.log("the new q of the item.q is.. ");
                            console.log(q);
                            updateCart[index].q = q;



                            /*
                            if (q === 0) {
                                console.log("There is no more quantity of this object");
                                shopCartExistence = 1;
                                //updateCart.splice(index, 1)
                                console.log("The new update of updateCart2");
                                console.log(updateCart);

                                
                            }
                            else {
                                shopCartExistence = 1;
                                


                            } 

                            index = items.arrayid;
                        }
                    }
                    ));




                    //update the new Cart
                    setShopCart(updateCart);

                }
            })



        }*/


        console.log("Cart after update");
        console.log(shopCart);


    }


    const fetchProducts = async () => {
        // const { data } = await commerce.products.list();
        const product_display = products_database;
        setProducts(product_display);
    }


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }



    const handleUpdateCartQty = async (productId, quantity) => {
        const cart = await commerce.cart.update(productId, { quantity });

        setCart(cart)
    }


    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    let total_item = shopCartLen;


    


    return (
        <Router>

            <div>

                <Switch>
                    <Route path="/" exact render={() => <StartPage />} />

                    <Route path="/Consent" exact render={() => <Consent />} />

                    <Route
                        path="/SurveyComponent"
                        render={() => <SurveyComponent userInfo={userInfo}></SurveyComponent>}
                    />

                    <Route
                        path="/ConsentPage"
                        render={() => (
                            <ConsentPage updatedData={updateUserInfo}></ConsentPage>
                        )}
                    />

                    <Route
                        path="/InBetween"
                        render={() => (
                            <InBetween setCondition={updateCondition}></InBetween>
                        )}
                    />

                    <Route exact path="/StoreClient">
                        <Navbar totalItems={total_item} />
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/main" render={() => (
                        <Tracker userInfo={userInfo} submitted={false}></Tracker>
                    )}>
                        <Navbar totalItems={total_item} />
                        <Main />
                    </Route>

                    <Route exact path="/sale">
                        <Navbar totalItems={total_item} />
                        <Products products={products} page="sale" onAddToCart={handleAddToCart} />
                        <Sale />
                    </Route>

                    <Route exact path="/newin">
                        <Navbar totalItems={total_item} />
                        <Products products={products} page="newin" onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/livingroom">
                        <Navbar totalItems={total_item} />
                        <Products products={products} page="livingroom" onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/bedroom">
                        <Navbar totalItems={total_item} />
                        <Products products={products} page="bedroom" onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/product">
                        <Navbar totalItems={total_item} />
                        <ProductDisplay onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/accessories">
                        <Navbar totalItems={total_item} />
                        <Products products={products} page="accessories" onAddToCart={handleAddToCart} />
                    </Route>


                    <Route exact path="/cart">
                        <Navbar totalItems={total_item} />
                        <Cart
                            shopCart={shopCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            onAddToCart={handleAddToCart}
                        />
                    </Route>

                    <Route exact path="/login">
                        <Navbar totalItems={total_item} />
                        <Login onSubmitLogin={handleLogin} onlogInStatus={loginStatus} onUserEmail={userEmail} onUserFirstName={UserFirstName} onUserLastName={UserLastName} />
                    </Route>

                    <Route exact path="/register">
                        <Navbar totalItems={total_item} />
                        <Register />
                    </Route>

                    <Route exact path="/checkout">
                        <Navbar totalItems={total_item} />
                        <Checkout
                            shopCart={shopCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            onAddToCart={handleAddToCart}
                        />
                    </Route>

                    <Route exact path="/payment">
                        <Navbar totalItems={total_item} />
                        <Payment
                            shopCart={shopCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            onAddToCart={handleAddToCart}
                        />
                    </Route>

                    <Route exact path="/confirmation">
                        <Navbar totalItems={total_item} />
                        <Confirmation
                            shopCart={shopCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            onAddToCart={handleAddToCart}
                        />
                    </Route>
                    <Route exact path="/accuracyTest">
                        
                    <AccuracyTest/>
                    </Route>
                    <Route
                        path="/SurveyComponent"
                        render={() => <SurveyComponent userInfo={userInfo}></SurveyComponent>}
                    />

                </Switch>
            </div>
        </Router>
    )
}

export default App;