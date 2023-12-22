import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logos from "./Logos.png";

import "./Startpage.css";



const StartPage = (props) => {
  return (
    <div className="StartPage">
      <img src={Logos} alt="Logos" width="900" height="100"></img>

      <div className="box1">


        <h1>You are invited to the study!</h1>
        <p>
          Hi, my name is is Carman Kai-Man Wong, and I am currently completing my Master's thesis. <br /><br />
      This study is a joint effort between the  <strong>Media Informatics Department at the
          Ludwig-Maximilians-Universität München, the Research Institute for Cyber Defense (CODE) at
      the Bundeswehr University and the Ruhr-Universität Bochum.</strong>

        </p>

        <br />
        <p>
          *The study takes ~15 minutes ⏳ to complete, and the information collected will be anonymous
          and used for only research and teaching🧑🏻‍.
        </p>
        <br />



        <p>
          <h2> Requirements</h2>
          <ol>
            <li> 1. A minimum age of 18  🧑🏻👨🏻</li>
            <li> 2. Good lighting 💡 in the room without strong light behind you </li>
            <li> 3. Don’t wear glasses (if possible, use contact lenses) 👀 </li>
            <li> 4. A laptop 💻 or PC 🖥️ that has a decent webcam</li>
            <li> 5. Use only Google Chrome or Firefox as your browser 🌐</li>
          </ol>
        </p>
        <br />

        <p>
          Your ideas and thoughts will contribute to the advancement of the internet security and eye gaze technology 🔭!

        </p>
        <br />




        <p>
          <h3> Process:</h3>

        Webcam calibration
        ▶

        Shopping experience

        ▶

        Post-accuracy test

        ▶ Survey

        </p>

        <br />< br />




        <Link
        to="/Consent" 
        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        
     
      <Button
      
          style={{
            width: "300px",
            marginBottom: "40px",
            backgroundColor: "#04B45F",
          }}
        >
          Get ready and start!
        </Button>
        </Link>


        < br />< br />< br />< br />< br />< br />


      </div>
    </div >
  );
};

export default StartPage;
