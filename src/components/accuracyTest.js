import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Canvas from "./canvas.js";

class AccuracyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testComplete: false,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      positionX: window.innerWidth / 2,
      positionY: window.innerHeight / 2,
      intro: true,
    };

    this.counter = 1;
    this.accuracyInterval = null;
    this.positionXNew = 0;
    this.positionYNew = 0;
    this.stateCollector = [];

    ////new
    this.collectionInterval = undefined;
    this.sendingInterval = undefined;
    this.accuracyCollector = [];
    this.accuracyIntervall = undefined;
    this.collectingAccuracy = false;
    ////
  }

  componentDidMount = () => {
    const timer = setTimeout(this.startAccuracyTest, 3000);
  };

  startAccuracyTest = () => {
    this.accuracyInterval = setInterval(this.drawNewCircle, 2500);
  };

  drawNewCircle = () => {
    switch (this.counter) {
      case 1:
        this.setState({ intro: false });
        this.positionXNew = 100;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 2:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 3:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 4:
        this.positionXNew = 100;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 5:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 6:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 7:
        this.positionXNew = 100;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 8:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 9:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.collectAccuracyData( //this.props.collect...
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        clearInterval(this.accuracyInterval);
        const timer = setTimeout(this.stopAccuracyTest, 2500);
        break;

      default:
    }
  };

  changeCirclePosition = (xPos, yPos) => {
    this.setState({ positionX: xPos, positionY: yPos });
  };

  sendAccurcyInfo = () => {
    //Send to Server
    const data = this.accuracyCollector;
    console.log(this.accuracyCollector)
	
	const response = fetch("http://localhost:3333/accuracyInfo", {								//{o}
    //const response = fetch("https://shopping-study.ddns.net:444/accuracyInfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sent accuracy info"));
  };



  /*
  stopAccuracyTest = () => {
    this.setState({ testComplete: true });
    this.props.stopAccuracyTest();
  };*/

  collectAccuracyData = (circlePos, width, height) => {
    if (this.collectingAccuracy === false) {
      this.accuracyIntervall = setInterval(
        this.fillAccuracyCollector,
        100,
        circlePos,
        width,
        height
      );
      this.collectingAccuracy = true;
    } else {
      clearInterval(this.accuracyIntervall);
      this.collectingAccuracy = false;
      this.collectAccuracyData(circlePos, width, height);
    }
  };

  /*
  setGazeData = () => {
    window.GazeCloudAPI.OnResult = function (GazeData) {
      window.gazeDataX = GazeData.docX;
      window.gazeDataY = GazeData.docY;
      window.validation = GazeData.state; // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated!
    };

    this.setState({
      gazeX: window.gazeDataX,
      gazeY: window.gazeDataY,
      validationGaze: window.validation,
    });

    this.setTransformedGazePos(this.state.gazeX, this.state.gazeY);
  };*/

  fillAccuracyCollector = (circlePos, width, height) => {
    //setGazeData();
    const gazeData = JSON.parse(window.sessionStorage.getItem("GazeData"))
    let accuracyData = [
      window.sessionStorage.getItem("useridnr"),//this.props.userInfo.userID,                    //this.state.userId,
      circlePos,
      gazeData.GazeX,
      gazeData.GazeY,
      gazeData.state,
      width,
      height,
    ];
    this.accuracyCollector.push(accuracyData);
  };

  
  stopAccuracyTest = () => {
    console.log("sending Data")
    this.sendAccurcyInfo();
    window.GazeCloudAPI.StopEyeTracking();
    clearInterval(this.accuracyIntervall);
    this.setState({ testComplete: true });
  };

  render() {
    let canvas;

    if (this.state.intro === true) {
      canvas = (
        <Canvas
          draw={(ctx) => {
            ctx.clearRect(
              0,
              0,
              this.state.screenWidth,
              this.state.screenHeight
            );
            ctx.fillStyle = "#000000";
            ctx.fillRect(
              0,
              0,
              this.state.screenWidth - 17,
              this.state.screenHeight - 17
            );
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";

            ctx.fillText(
              "Please follow the red circle with your eyes",
              this.state.screenWidth / 2 - 300,
              this.state.screenHeight / 2
            );
          }}
        />
      );
    } else {
      canvas = (
        <Canvas
          draw={(ctx) => {
            ctx.clearRect(
              0,
              0,
              this.state.screenWidth,
              this.state.screenHeight
            );
            ctx.fillStyle = "#000000";
            ctx.fillRect(
              0,
              0,
              this.state.screenWidth - 17,
              this.state.screenHeight - 17
            );
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#fc0b0b";
            ctx.arc(
              this.state.positionX,
              this.state.positionY,
              20,
              0,
              2 * Math.PI
            );
            ctx.closePath();
            ctx.stroke();
          }}
        />
      );
    }

    return (
      <div>
        {!this.state.testComplete ? (
          canvas
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Thank you. Please complete the survey to finish the study</p>
            <Link
              to="/SurveyComponent"
              activeClassName="active"
              style={{ width: "380px" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#04B45F", margin: "10px" }}
               
              >
                <ExitToAppIcon></ExitToAppIcon>Go To Survey
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default AccuracyTest;
/*<Link
  to="/SurveyComponent"
  activeClassName="active"
  style={{ width: "380px" }}
></Link>;*/
