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
import Creditcard from "./CreditCard.png";
import Debitcard from "./DebitCard.png";


const ConsentPage = (props) => {
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
     <img src={Logos} alt="Logos" width="900" height="100"></img>

<div className="box1">


  <h1>Task</h1>


<p>After moving into a new apartment with no furniture, you wish to buy some furniture online.
</p>
<p>Please browse online furniture store "DigitFurns." and get the following items for your apartment:
</p>


  <p>
    <ol>
      <li> 1. One item for your living room 🛋️ 
</li>
      <li> 2. One item for your bedroom 🛏️
 </li>
      <li> 3. One accessory item for your apartment 🕯️ <br/>
 </li>
    </ol>
  </p>

  <br/>

<p>
  
<h2>You would need to go through the following process: 
</h2>

</p>


<p>

• You need to create an account 👤, add items to the shopping cart 🛒, proceed to the checkout page 🛍️ and finish the payment process 💳.
  </p>
  <p>• The user’s name and account names can be imagined 👤.  
  </p>
  <p><p>• You have the option to pay by credit card or debit card 💳.
 </p>
 • Write down ✍️or take a picture 📸 of the provided credit card 
   information, so you can decide which one to use at the
    payment later, without interrupting your online 
    shopping experience.

    </p>

    <img src={Creditcard} alt="Creditcard" width="50%" height="50%"></img>
    <img src={Debitcard} alt="Debitcard" width="50%" height="50%"></img>

</div>

<div className="box1">






  <br />< br />



  <Link
        id="link"
        to="/main" //"/StoreClient"

        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        
      </Link>

      <Button
          onClick={function(){updateProp(); document.getElementById("startid").click()}}
          style={{
            width: "300px",
            marginBottom: "40px",
            backgroundColor: "#04B45F",
          }}
        > 
          I agree
        </Button>





     

        </div>
    </div>
  );
};

export default ConsentPage;
