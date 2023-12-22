import React, { Component } from "react";
//import * as Survey from "survey-react";
//import "survey-react/survey.css";
import "./InBetweenPage.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Tracker from "./Tracker";
import { useForm } from "./useForm";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import CodeIcon from '@material-ui/icons/Code';
// import Logos from "./Logos.png";
// import Cam from "./CorruptCam.PNG";


class InBetween extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      condition: 0,
      styles : {
        buttonsSidebar: {
          color: "#2E2E2E",
          margin: "10px",
        }
      },
    }
    this.getUserID();                                     //Stößt Server-Abfrage von user bzw. user id an
    this.sleep(1500);                                     //Lässt Programm warten bis Server antwortet, damit der Tracker bzw. Email Client von Anfang an die UserID und die condition kennen

    

  }

  componentDidMount() {

  }
  

  getUserID = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/connect", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ userID: data.userID }))
      .then(() => this.setState({condition: (this.state.userID%3)+1}));                 //(this.state.userID%3)+1 
  };

  conditionSetter = () => {
    let cond = this.state.condition;
    let id = this.state.userID;
    this.props.setCondition(cond,id);
  }

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    this.state.forward = true;
  }


  render(){
    let lin = (<div><Link
      to="/StoreClient"
      activeClassName="active"
      style={{ marginBottom: "40px", marginLeft: "40px" }}
    >
      <Button
        onClick={this.conditionSetter}
        style={{
          width: "300px",
          marginBottom: "40px",
          backgroundColor: "#04B45F",
        }}
      >
        Start
      </Button>
    </Link></div>)
    /*
    if(this.state.condition === 4){             //ursprünglich 3, aber jetzt führt 3 auch in den normalen client ==> Kann in der Zukunft entfernt werden
      lin = (
      <Link
          to="/Questionnaire"
          activeClassName="active"
          style={{ marginBottom: "40px", marginLeft: "40px" }}
        >
          <Button
            onClick={this.conditionSetter}
            style={{
              width: "300px",
              marginBottom: "40px",
              backgroundColor: "#04B45F",
            }}
          >
            Start
          </Button>
        </Link>
      )
    }
    */
    let body = 
      <div>
      {/* <img src={Logos} alt="Logos" width="900" height="100"></img> */}
      <p>
        <strong>Your task: </strong>Pretend you are working as a secretary in a
        start-up called Global-Connect. Your job is to go through your and your
        bosses custom emails as your first task in the morning.
      </p>
      <p>
        Your boss is off on holidays for the week, after having had several
        meetings with a company called "Imotion" last week. Therefore, your
        inbox and your bosses have been joined together.
      </p>
      <p>
        Go through <strong>all the emails </strong>and{" "}
        <strong>select the right inbox for each email</strong>. There are three
        different inboxes to select from:
      </p>
      <ol style={{ listStyleType: "clear" }}>
        <br></br>
        <li>
          <strong>Important</strong>
        </li>
        <li>
          <strong>Neutral</strong>
        </li>
        <li>
          <strong>Bin</strong>
        </li>
      </ol>
      <br></br>
      <p>
        You can move the email to an inbox by clicking{" "}
        <strong>"Move to Important"</strong>,<strong> "Move to Spam"</strong> or{" "}
        <strong>"Move to Bin"</strong> inside each email window.
      </p>
      <Button
        style={this.state.styles.buttonsSidebar}
        startIcon={<EmailIcon />}
        variant="outlined"
      >
        Move to Important
      </Button>
      <Button
        startIcon={<CodeIcon />}
        style={this.state.styles.buttonsSidebar}
        variant="outlined"
      >
        Move to Neutral
      </Button>
      <Button
        style={this.state.styles.buttonsSidebar}
        startIcon={<DeleteIcon />}
        variant="outlined"
      >
        Move to Bin
      </Button>
      <br></br>
      <p>
        <strong>After you have finished your task</strong> click
        <Button
          variant="contained"
          style={{ backgroundColor: "#04B45F", margin: "10px" }}
        >
          <ExitToAppIcon></ExitToAppIcon>Submit
        </Button>{" "}
        on the top right of your email client before continuing with the
        <strong> accuracy test </strong> and the
        <strong> post study questionnaires</strong>.
      </p>
      <hr></hr>
      </div>
    ;



    if(this.state.condition === 2){
      body = (
      <div>
      {/* <img src={Logos} alt="Logos" width="900" height="100"></img> */}
      <p>
        <strong>Your task: </strong>Pretend you are working as a secretary in a
        start-up called Global-Connect. Your job is to go through your and your
        bosses custom emails as your first task in the morning.
      </p>
      <p>
        Your boss is off on holidays for the week, after having had several
        meetings with a company called "Imotion" last week. Therefore, your
        inbox and your bosses have been joined together.
      </p>
      <p>
        Go through <strong>all the emails </strong>and{" "}
        <strong>select the right inbox for each email</strong>. There are three
        different inboxes to select from:
      </p>
      <ol style={{ listStyleType: "clear" }}>
        <br></br>
        <li>
          <strong>Important</strong>
        </li>
        <li>
          <strong>Spam</strong>
        </li>
        <li>
          <strong>Neutral</strong>
        </li>
        <li>
          <strong>Bin</strong>
        </li>
      </ol>
      <br></br>
      <p>
        You can move the email to an inbox by clicking{" "}
        <strong>"Move to Important"</strong>,<strong> "Move to Spam"</strong> or{" "}
        <strong>"Move to Bin"</strong> inside each email window.
      </p>
      <Button
        style={this.state.styles.buttonsSidebar}
        startIcon={<EmailIcon />}
        variant="outlined"
      >
        Move to Important
      </Button>
      <Button
        startIcon={<ErrorIcon />}
        style={this.state.styles.buttonsSidebar}
        variant="outlined"
      >
        Move to Spam
      </Button>
      <Button
        style={this.state.styles.buttonsSidebar}
        startIcon={<DeleteIcon />}
        variant="outlined"
      >
        Move to Bin
      </Button>
      <Button
        style={this.state.styles.buttonsSidebar}
        startIcon={<CodeIcon />}
        variant="outlined"
      >
        Move to Neutral
      </Button>
      <br></br>
      <p>
        <strong>After you have finished your task</strong> click
        <Button
          variant="contained"
          style={{ backgroundColor: "#04B45F", margin: "10px" }}
        >
          <ExitToAppIcon></ExitToAppIcon>Submit
        </Button>{" "}
        on the top right of your email client before continuing with the
        <strong> accuracy test </strong> and the
        <strong> post study questionnaires</strong>.
      </p>
      <hr></hr>
      </div>
      )
    ;
    }else if(this.state.condition === 3){  
      body = <div> 
        {/* <img src={Logos} alt="Logos" width="900" height="100"></img> */}
        <p>Welcome to your the spam classification</p>
        <hr></hr>
        <h2>Spam classification</h2>
        <p>
          You now will be presented with 34 emails and have to decide for each of those emails, if you would consider them a spam email or not.
          <p>
            In order to receive your reimbursement you need to classify all the mails and finish the final survey.
          </p>
          More information on the reimbursement will be provided at the end of the
          study.
        </p>
        </div>;
    }

    return (
      <div>
        <p>condition {this.state.condition}</p>
        <p>userID {this.state.userID}</p>
        {body}
        <hr></hr>
      <h2>Consent:</h2>
      <br></br>
      <p>
        <strong>
          <p>
            Please agree with the terms and conditions below before proceeding.{" "}
          </p>
        </strong>
      </p>
      <br></br>
      <p>
        {" "}
        1. I am aware that the collection, processing and use of my data is
        voluntary. The experiment can be canceled by me at any time without
        mentioning reasons and without causing me any disadvantages. In the
        event of cancellation, all data recorded of me will be irrevocably
        deleted.{" "}
      </p>
      <p>
        2. I agree that my following data are processed: a) demographics b) Gaze
        data and mouse movements, c) feedback questionnaires. The webcam video
        feed is not stored. Only gaze coordinates will be extracted and saved.
      </p>
      <br></br>
      <p>
        3. I agree that the above mentioned data will be collected, processed,
        stored and used by Bundeswehr University Munich for the following
        purposes: a) analysis of the data for reporting in scientific
        publications. The data is published completely anonymously, i.e., the
        collected data cannot be related to respective participants. b)
        Publication of dataset on the university website. c) The anonymized data
        is stored for an indefinite period of time. Due to the anonymization,
        data cannot be deleted after the study.
      </p>
      <br></br>
      <p>
        4. I have been informed that my personal data collected in the context
        of the above purposes will be processed in compliance with the General
        Data Protection Regulation (GDPR and BayDSG).
      </p>
      <br></br>
      <p>
        5. I am aware that I can only participate in this study once and will
        only be reimbursed once. In addition, finishing the study is mandatory
        for receiving any reimbursement.
      </p>
      <p>
        If you have questiones or concerns, please contact:
        <strong> ryan.steimer@campus.lmu.de </strong>or{" "}
        <strong>yasmeen.essam@unibw.de</strong>
      </p>
      <br></br>
        {lin}
      </div>
    );

  }

    
    
}
export default InBetween;