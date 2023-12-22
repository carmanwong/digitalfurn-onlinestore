import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";
import "./Startpage.css";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import Logos from "./Logos.png";
import Cam from "./CorruptCam.PNG";



const Consent = (props) => {
  return (
    <div className="StartPage">
     <img src={Logos} alt="Logos" width="900" height="100"></img>

<div className="box2">


  <h1>Guide</h1>
  <p>
    <ol>
  
      <li> 1. Do not pause and continue the study later on, but rather complete it in one continuous session.
</li>
      <li> 2. Don't click the back button on your browser or refresh the page.
 </li>
      <li> 3. If you cannot be tracked by the eye gaze tracker, a pop-up window as below will appear. 
        It will disappear once you are tracked again. <br/>
 </li>
    </ol>
  </p>

  <img src={Cam} alt="CamFaulty" padding="100" width="250" height="150"></img>


</div>

<div className="box2">


  <h1>Consent</h1>
  <p className="consent">
    <ol>
  
      <li> Please agree with the terms and conditions below before proceeding.
          </li>
      <li> 1. I am aware that the collection, processing and use of my data is voluntary. The experiment can be canceled by me at any time without mentioning reasons and without causing me any disadvantages. In the event of cancellation, all data recorded of me will be irrevocably deleted.
          </li>
      <li> 2. I agree that my following data are processed: a) demographics b) gaze data and mouse movements, c) feedback questionnaires. The webcam video feed is not stored. Only gaze coordinates will be extracted and saved. 
          </li>
      <li> 3. I agree that the above mentioned data will be collected, processed, stored and used by Bundeswehr University Munich for the following purposes: a) analysis of the data for reporting in scientific publications. The data is published completely anonymously, i.e., the collected data cannot be related to respective participants. b) Publication of dataset on the university website. c) The anonymized data is stored for an indefinite period of time. Due to the anonymization, data cannot be deleted after the study.
          </li>
          <li> 4. I have been informed that my personal data collected in the context of the above purposes will be processed in compliance with the General Data Protection Regulation (GDPR and BayDSG).
          </li>
          <li> 5. By pushing the continue button means you have agree the terms and conditions on this consent. 

          </li>
          <li> If you have questions or concerns, please contact: kai.wong@campus.lmu.de
          </li>

    </ol>
  </p>





  <br />< br />




        <Link
        to="/ConsentPage" 
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
          I agree
        </Button>
        </Link>


        < br />< br />< br />< br />< br />< br />


      </div>
    </div >
  );
};

export default Consent;
