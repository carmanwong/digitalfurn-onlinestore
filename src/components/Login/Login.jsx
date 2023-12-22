import React from 'react';
import { Container, IconButton, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { login_database } from '../Accountdatabase/Accountdatabase';
import { useHistory } from "react-router-dom";


import { reportClickEvent, reportHoverEvent } from '../../eventTracking'





const Login = ({ onSubmitLogin, onlogInStatus, onUserEmail, onUserFirstName, onUserLastName }) => {

    const history = useHistory();

    console.log(login_database);


    const appStyle = {
        // height: '250px',
        // display: 'flex'
    };

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

            window.sessionStorage.setItem("currentUsername", usernameRef.current.value);

            window.sessionStorage.setItem("currentPassword", usernameRef.current.value);

            onSubmit(data);
        };
        return (
            <form style={formStyle} onSubmit={handleSubmit} >
                <Field ref={usernameRef} label="Email Address" type="text" onClick={function () { reportClickEvent("LOGIN_Username") }} onMouseEnter={function () { reportHoverEvent("LOGIN_Username") }} />
                <Field ref={passwordRef} label="Passwor:" type="password" onClick={function () { reportClickEvent("LOGIN_Password") }} onMouseEnter={function () { reportHoverEvent("LOGIN_Password") }} />
                <div>
                    {/* <Link to="/main"></Link> */}
                    <button style={submitStyle} type="submit" onClick={function () { reportClickEvent("LOGIN_LoginBtn") }} onMouseEnter={function () { reportHoverEvent("LOGIN_LoginBtn") }}>LOGIN</button>
                </div>
            </form>
        );
    };

    const handleSubmit = async(data) => {
        const json = JSON.stringify(data, null, 4);


        var event = JSON.parse(json);

        console.log(event.username);
        console.log(event.password);

        let jsonSent = {
            email: event.username,
            password: event.password,

        }

		await fetch("http://localhost:3333/login",
        //await fetch("https://shopping-study.ddns.net:444/login",
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)// body data type must match "Content-Type" header
            })
        .then(response => {
            if(response.status === 200){
                window.sessionStorage.setItem("currentPassword", data.password);
                window.sessionStorage.setItem("currentEmail", data.username);
                history.push("/main");
                
            } else {
                window.alert("login failed. please try again or register")
            }});
        
        login_database.map((login_database) => {
            if (login_database.email == event.username) {
                console.log("This account existed " + login_database.email);

                onSubmitLogin(1, login_database.email, login_database.firstname, login_database.lastname);

                

            }
        });




    };

    const classes = useStyles();

    console.log("entered the login page");
    console.log("loginstatus is..." + onlogInStatus);




    if (onlogInStatus == 0) {
        return (
            <Container className={classes.bigcontainer}>
                <div className={classes.toolbar} />

                <Typography className={classes.title} variant="h3" gutterBottom onMouseEnter={function () { reportHoverEvent("LOGIN_WelcomeTxt") }}> Welcome to DigitFurns. </Typography>



                <div className={classes.container}>
                    <div className={classes.leftBox} onMouseEnter={function () { reportHoverEvent("LOGIN_loginTxt") }}>
                        LOGIN

                    <div style={appStyle}>
                            <Form onSubmit={handleSubmit} />
                        </div>

                        {/* <button className={classes.button}>LOGIN</button> */}


                    </div>

                    <div className={classes.rightBox} onMouseEnter={function () { reportHoverEvent("LOGIN_rightbox") }}>  New to DigiFruns.?
                <br />
                        <div className={classes.desciption} onMouseEnter={function () { reportHoverEvent("LOGIN_InfoTxt") }}> By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</div>

                        <br /><br /><br />

                        <Button component={Link} to="/register" className={classes.button} onClick={function () { reportClickEvent("LOGIN_RegisterBtn") }} onMouseEnter={function () { reportHoverEvent("LOGIN_RegisterBtn") }}>CREATE AN ACCOUNT</Button>
                    </div>
                </div>

                <br /><br /><br />

            </Container>

        );
    }
    else if (onlogInStatus == 1) {
        return (
            <Container className={classes.bigcontainer}>
                <div className={classes.toolbar} />

                <Typography className={classes.title} variant="h3" gutterBottom> Welcome to DigitFurns. </Typography>



                <div className={classes.container}>


                    <div className={classes.rightBox}   >  {onUserFirstName}'s Account
                    <br /><br />

                        <div className={classes.desciption}   >
                            User's email:
                        </div>

                        <div className={classes.desciption}   >
                            {onUserEmail}
                        </div>

                        <br /><br />

                        <div className={classes.desciption}   >
                            User's Last Name:
</div>

                        <div className={classes.desciption}   >
                            {onUserLastName}
                        </div>

                        <br /><br />

                        <div className={classes.desciption}   >
                            User's First Name:
</div>

                        <div className={classes.desciption}   >
                            {onUserFirstName}
                        </div>

                        <br /><br /><br />

                        <Button component={Link} to="/main" className={classes.button}> LOG OUT</Button>
                    </div>
                </div>
   


            </Container>
         

        );
    }





};

export default Login;