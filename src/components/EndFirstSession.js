import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";
import "./Startpage.css";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import Logos from "./Logos.jpeg";



const EndFirstSession = (props) => {

  const equal_lessthan_sign = "<=";
  const equal_morethan_sign = ">=";

  const [values, handleChange] = useForm({
    email: "",
    name: "",
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateProp = () => {
    let email = values.email;
    let name = values.name;
    email === "" ? (email = "carman_wong@example.com") : (email = email);
    name === "" ? (name = "Carman Wong") : (name = name);
    // window.sessionStorage.setItem("currentEmail",    document.getElementById("emailField").value)
    // window.sessionStorage.setItem("currentUsername", document.getElementById("nameField").value)
    props.updatedData(email, name);


  };

  var styles = {
    buttonsSidebar: {
      color: "#2E2E2E",
      margin: "10px",
    },
  };

  return (
    <div className="StartPage">
      <img src={Logos} alt="Logos" width="100%"></img>

      <div className="box1">

        <h1>Finished confirmation of the first session of the study.</h1>

        <br /><br />
        <p>
          Thank you for finishing the first session of the study.
          </p>
          <br />
          <p>
          To continue the second session of the study, please do the following: 
          </p>
          <br />
 
        <p>
          <ol>
            <li> 1. Bring the <strong>Email address and password</strong> you created for  <strong>the next session</strong>.
            </li>
            <li>2. Keep the credit card information you noted, or bring <strong> a pen and a piece of paper</strong> or  <strong>a phone</strong> to record the same information on the next session.
            </li>
            <li> 3. Save <strong>the following link of the next session and open it</strong> after  <strong>at least 12 hours </strong>and <strong>within 3 days </strong> from now. <br />
            </li>
          </ol>
        </p>
        <br />
        <p><Link>Clik here for the link of the second session.</Link></p>
        <br />
        <p>See you at the next session! You may now close the window.</p><br />

     


 

  

      </div>
    </div>
  );
};

export default EndFirstSession;
