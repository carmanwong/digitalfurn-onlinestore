import React, { Component } from "react";
// import EmailClient from "./emailClient";
// import EmailClientAlt from "./emailClientAlt";
import AccuracyTest from "./accuracyTest";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      currentEmail: 0, //event dependant
      currentInbox: "AllInbox",
      inboxEnterTime: Date.now(),
      spentInInbox: 0,
      insideEmailInfo: [],
      outsideEmailInfo: [], //event dependant
      mousePosXPlain: 0,
      mousePosYPlain: 0,
      mousePosXTransform: 0,
      mousePosYTransform: 0,
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
      timeStamp: 0,
      gazeX: 0,
      gazeY: 0,
      gazeXTransform: 0,
      gazeYTransform: 0,
      validationGaze: 0, // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated!
      userId: 0,
      condition: 0,
      userNickname: "",
      pageScrollY: 0,
      browserWidth: 0,
      browserHeight: 0,
      marginToScreenTop: 0,
      marginToScreenLeft: 0,
      inEmailScrollAmount: 0,
      inEmailPositionY: 0,

      submitted: false,
      acc: false,
    };

    this.resultInbox = { resultInbox: [], userID: 0 };
    this.stateCollector = [];
    this.collectionInterval = undefined;
    this.sendingInterval = undefined;
    this.accuracyCollector = [];
    this.accuracyIntervall = undefined;
    this.collectingAccuracy = false;
    this.getUserID();
  }

  componentDidMount() {
    this.getNickname();
    //this.startCalibration();                  // adds eyetracking
    this.startTracking();                       //comment the above line out and this one in to run it without eyetracking (dev mode)

  }
  
  getUserID = () => {
    this.setState({userId: this.props.userInfo.userID})
    this.setState({condition: this.props.userInfo.condition})
    this.setState({submitted: this.props.submitted})
  }
  
  getNickname = () => {
    //set nickname from props
    let nickname = this.props.userInfo.userName;
    this.setState({ userNickname: nickname });
  };
  

  startCalibration = () => {                                          //GazeRecorder Einbindung
    window.GazeCloudAPI.APIKey = "GazeBehavior_NonCommercialUse";
    window.GazeCloudAPI.StartEyeTracking();
    window.GazeCloudAPI.OnCalibrationComplete = () => {
      console.log("gaze Calibration Complete");
      this.startTracking();
    };
  };
  

  startTracking = () => {                                             //Frequenz und Sendeintervalle
    this.collectionInterval = setInterval(this.collectStates, 33);    //angepasst von 250
    this.sendingIntervall = setInterval(this.sendData, 3000);
  };

  sendData = () => {                                                  //Senden als json zum Server
    const data = this.stateCollector;
    const response = fetch("/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.resetCollector);
  };

  sendAccurcyInfo = () => {
    //Send to Server
    const data = this.accuracyCollector;
    const response = fetch("/accuracyInfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sent accuracy info"));
  };

  collectStates = () => {
    this.setAllInfo();
    this.fillCollector();
    this.resetStates();
  };

  setAllInfo = () => {
    this.settingsChecker();
    this.setGazeData();
    this.setTimestamp();
  };

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
  };

  setTimestamp = () => {
    let currentTime = new Date();
    let newDate = currentTime.getTime();
    this.setState({ timeStamp: newDate });
  };

  fillCollector = () => {
    this.stateCollector.push(this.state);
  };

  resetCollector = () => {
    this.stateCollector = [];
  };

  resetStates = () => {
    this.setState({
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
    });
  };

  handleMouseMove(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.setState({ mousePosXPlain: x, mousePosYPlain: y });
  }

  settingsChecker = () => {

    let id = this.props.userInfo.userID;                //making sure the correct userID is in the state because for some weird fucking reason it was 0 all the time when the data was sent to the server
    let condition = this.props.userInfo.condition;

    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let marginTop = window.screenTop;
    let marginLeft = window.screenLeft;

    let yScroll = Math.round(window.scrollY);

    this.setState({
      browserWidth: width,
      browserHeight: height,
      marginToScreenLeft: marginLeft,
      marginToScreenTop: marginTop,
      pageScrollY: yScroll,
      userId: id,
      condition: condition,
    });

    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );

    this.setinEmailPositionY();
  };

  setinEmailPositionY = () => {
    let inEmailPositionY =
      this.state.mousePosYPlain + this.state.inEmailScrollAmount;
    this.setState({ inEmailPositionY: inEmailPositionY });
  };

  SetInEmailScrollAmount = (scrollAmount) => {
    let roundScrollAmount = Math.round(scrollAmount);
    this.setState({ inEmailScrollAmount: roundScrollAmount });
  };

  setTransformedMousePos = (x, y) => {
    let clientWidth = 980;
    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xTran = (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yTran = y + this.state.pageScrollY;
    } else {
      var xTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yTran = y + this.state.pageScrollY;
    }
    this.setState({ mousePosXTransform: xTran, mousePosYTransform: yTran });
  };

  setTransformedGazePos = (x, y) => {
    let clientWidth = 980;

    
    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xGazeTran =
        (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yGazeTran = y + this.state.pageScrollY;
    } else {
      var xGazeTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yGazeTran = y + this.state.pageScrollY;
    }
    this.setState({ gazeXTransform: xGazeTran, gazeYTransform: yGazeTran });
  };

  handleMouseClick(event) {
    let copy = this.state;
    this.handleMouseMove(event);
    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );
    copy.click = true;
    copy.clickPosX = this.state.mousePosXPlain;
    copy.clickPosY = this.state.mousePosYPlain;
    this.setState(copy);
  }

  handleNewCurrentEmail = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleNewCurrentInbox = (inboxType) => {
    let copy = this.state;
    copy.currentInbox = inboxType;
    copy.currentEmail = 0;
    copy.spentInInbox = copy.inboxEnterTime - Date.now();       //Versuch zu tracken, wie viel Zeit in einem Postfach verbracht wird
    copy.inboxEnterTime = Date.now();
    this.setState(copy);
  };

  handleInboxResult = (finalInboxLocal) => {
    this.resultInbox.resultInbox = finalInboxLocal;
    this.resultInbox.resultInbox.forEach((element) => {
      element.keyID = element.mail.defaultProps.keyID;
      element.unseen = element.mail.defaultProps.unseen;
    });
    this.resultInbox.userID = this.state.userId;
    this.sendFinalInbox();
    //if(this.props.submitted === true){                //Nur accuarcy testing wenn beide tasks done
      // this.startAccuracyTest();
    //}
    clearInterval(this.collectionInterval);
    clearInterval(this.sendingIntervall);
  };

  sendFinalInbox = () => {
    //Send to Server

    const data = this.resultInbox;
    const response = fetch("/resultInbox", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sent result Inbox"));
  };

  

  startAccuracyTest = () => {
    let copy = this.state;
    copy.acc = true;
    this.setState(copy);
  };

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

  fillAccuracyCollector = (circlePos, width, height) => {
    this.setGazeData();
    let accuracyData = [
      this.props.userInfo.userID,                    //this.state.userId,
      circlePos,
      this.state.gazeX,
      this.state.gazeY,
      this.state.validationGaze,
      width,
      height,
    ];
    this.accuracyCollector.push(accuracyData);
  };

  stopAccuracyTest = () => {
    this.sendAccurcyInfo();
    window.GazeCloudAPI.StopEyeTracking();
    clearInterval(this.accuracyIntervall);
  };

  handleInsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      if (whichPart.includes("ClickedLink")) {
        copy.insideEmailInfo.push(whichPart);
        const timerForClickedLink = setTimeout(() => {
          this.deletefromInsideEmailInfo(whichPart);
        }, 1000);
        this.setState(copy);
        this.sendData();
        return;
      }
      if (!copy.insideEmailInfo.includes(whichPart)) {
        copy.insideEmailInfo.push(whichPart);
      } else {
      }
      this.setState(copy);
    } else {
      this.deletefromInsideEmailInfo(whichPart);
    }
  };

  handleOutsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      copy.outsideEmailInfo.push(whichPart);
      this.setState(copy);
    } else {
      this.deletefromOutsideEmailInfo(whichPart);
    }
  };

  deletefromInsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.insideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.insideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  deletefromOutsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.outsideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.outsideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  handleClickedInboxButton = (whichButton, insideWhichButton) => {
    let copy = this.state;
    copy.insideEmailInfo.push(whichButton);
    this.setState(copy);

    const timer2 = setTimeout(() => {
      this.deletefromInsideEmailInfo(whichButton);
    }, 1050);
  };

  setSubmitted = () => {
    let copy = this.state;
    copy.submitted = true;
    this.setState(copy);
  }

    render() {
      let ret =(<div></div>);
      if(this.state.acc === true){
        ret = (
          <AccuracyTest
          collectAccuracyData={this.collectAccuracyData}
          stopAccuracyTest={this.stopAccuracyTest}
        ></AccuracyTest>
        )
      }else if(this.props.submitted === false){
        ret = (
          <div
                onMouseMove={this.handleMouseMove}
                onClick={this.handleMouseClick}
              >
                <div>
                  {/* <EmailClient
                  clickedButton={this.handleClickedInboxButton}
                  inEmailScrollAmount={this.SetInEmailScrollAmount}
                  UserInfo={this.props.userInfo}
                  Condition = {this.props.userInfo.condition}
                  onNewEmail={this.handleNewCurrentEmail}
                  onNewInbox={this.handleNewCurrentInbox}
                  setInboxResult={this.handleInboxResult}
                  insideEmailInfo={this.handleInsideEmailInfo}
                  outsideEmailInfo={this.handleOutsideEmailInfo}
                  setSubmitted={this.setSubmitted}
                ></EmailClient>  */}
                </div>
              </div>
        )
      }else if(this.props.submitted === true ){                       //&& this.props.userInfo.condition < 3
        ret = (
          <div
                onMouseMove={this.handleMouseMove}
                onClick={this.handleMouseClick}
              >
                <div>
                  {/* <EmailClientAlt
                  clickedButton={this.handleClickedInboxButton}
                  inEmailScrollAmount={this.SetInEmailScrollAmount}
                  UserInfo={this.props.userInfo}
                  Condition = {this.props.userInfo.condition}
                  onNewEmail={this.handleNewCurrentEmail}
                  onNewInbox={this.handleNewCurrentInbox}
                  setInboxResult={this.handleInboxResult}
                  insideEmailInfo={this.handleInsideEmailInfo}
                  outsideEmailInfo={this.handleOutsideEmailInfo}
                ></EmailClientAlt>  */}
                </div>
              </div>
        )
      }else{
        ret = (
          <div></div>
        )
      }
      return (
        <div>
          {ret}
        </div>
      );  
    }
}

export default Tracker;
