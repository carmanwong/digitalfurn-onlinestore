const fs = require('fs')
const path = require('path');
const express = require('express')
const https = require('https')


/*    {o}

const certificate = fs.readFileSync('/etc/letsencrypt/live/shopping-study.ddns.net/cert.pem', 'utf8');
const privateKey = fs.readFileSync('/etc/letsencrypt/live/shopping-study.ddns.net/privkey.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/shopping-study.ddns.net/chain.pem', 'utf8');

// let privateKey = "emptyK"
// let certificate = "empty"
const credentials = {key: privateKey, cert: certificate, ca: ca};

console.log(certificate) */



const app = express();
//const app = express()

const bcrypt = require("bcrypt");




app.use(express.json())

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //{o}
  //res.setHeader('Access-Control-Allow-Origin', 'https://188.68.34.120:443');
  


  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  /*
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);*/

  // Pass to next layer of middleware
  next();
});


//{o}
//const port = 444;
const port = 3333;

let lastStartTime;



app.get('/', (req, res) => {
  res.send('Hello, this is the access point to the logging API. Post JSON here periodically to convert them to a .csv')
})

app.post('/', (req, res) => {
    
   // console.log(req.body)


    let headerString = ""//"currentPage, insideProduct, spamInbox, mailNrBadge, alerted, allInboxEmpty, timer, progress, spam, marginToScreenLeft, marginToScreenTop, mousePosXPlain, mousePosYPlain, mousePosXTransform, mousePosYTransform, browserWidth, browserHeight, pageScrollX, pageScrollY, gazeX, gazeY, headX, headY, headZ, headYaw, headPitch, headRoll, "
    let valueString = ""


    
    
    
  /*
    const today_raw = new Date();
    const today = today_raw.toISOString().split('T')[0]
    const time = today_raw.getHours() + "_" + today_raw.getMinutes() + "_" + today_raw.getSeconds();
    const startTime = req.body[0].startTime;*/


    //const startTime = req.body[0].startTime;
    
    let userID = req.body[0].userID;
    if (userID === null){
      userID = "0" + Math.floor(Math.random(99999)*89999 + 10000);
      console.warn("Warning: userID is null. Saving under random number: " + userID)
    }

    const log_dir = path.join(__dirname, "logs")
    const log_path = path.join(log_dir, "vowstudy_" + userID + ".csv")

 
    
    //if directory doesn't exist
    if (!fs.existsSync(log_dir)){
        fs.mkdirSync(log_dir);
    }

    //const bodyString = JSON.stringify(req.body)


    //write the file 
    
    if(req.body[0].startTime !== lastStartTime){
      lastStartTime = req.body[0].startTime;

      for (let key in req.body[0]){
        headerString = headerString + key + ", "
      }

      
      fs.appendFile(log_path, headerString + "\n", err => {

        if (err) {
          console.error(err)
          res.status(500)
          res.send()
          return
        }
      })
    
      
    }
    

    for (let i = 0; i < req.body.length; i++){
      for (let key in req.body[i]){
        let value = req.body[i][key];
        valueString = valueString + value + ", "
        
      }
      valueString = valueString + "\n"
    }

    
    

    fs.appendFile(log_path, valueString , err => {
        
      if (err) {
        console.error(err)
        res.status(500)
        res.send()
        return
      }
    })

    valueString = "";

    res.status(200)
    res.send()
      
    
  })
  
app.post('/SurveyData', (req, res) => {
  
  console.log(req.body);

  //const starttime = req.body[0].startTime;

  let userID = req.body.userID;
  if (userID === null){
    userID = "0" + Math.floor(Math.random(99999)*89999 + 10000);
    console.warn("Warning: userID is null. Saving under random number: " + userID)
  }

  const log_dir = path.join(__dirname, "survey")
  const log_path = path.join(log_dir, "survey_" + userID + ".json")

  //if directory doesn't exist
  if (!fs.existsSync(log_dir)){
      fs.mkdirSync(log_dir);
  }

  //const bodyString = JSON.stringify(req.body)


  //write the file 
  
  

  

  
  

  fs.appendFile(log_path, JSON.stringify(req.body) , err => {
      
    if (err) {
      console.error(err)
      res.status(500)
      res.send()
      return
    }
  })

  res.status(200)
  res.send()
    
  
})

app.post('/accuracyInfo', (req,res) => {
  console.log("in AccuracyInfo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  console.log(req.body);

  //const starttime = req.body[0].startTime;
  let headerString = ""
  let valueString = ""

  for (let i = 0; i < req.body.length; i++){
    for (let key in req.body[i]){
      let value = req.body[i][key];
      valueString = valueString + value + ", "
      
    }
    valueString = valueString + "\n"
  }

  let userID = req.body[0][0];
  if (userID === null){
    userID = "0" + Math.floor(Math.random(99999)*89999 + 10000);
    console.warn("Warning: userID of accuracyData is null. Saving under random number: " + userID)
  }

  const log_dir = path.join(__dirname, "accuracy")
  const log_path = path.join(log_dir, "accuracy_" + userID + ".csv")

  //if directory doesn't exist
  if (!fs.existsSync(log_dir)){
      fs.mkdirSync(log_dir);
  }


  let csvHeader = "userID, circleNr, gazeX, gazeY, gazeValid, circleX, circleY," +'\n'
  let csvString = csvHeader
  req.body.forEach(e => {
    e.forEach(f => {
      csvString = csvString + f + ","
      
    })
    csvString = csvString + '\n'
  })

  //write the file 
  fs.appendFile(log_path, csvString , err => {
      
    if (err) {
      console.error(err)
      res.status(500)
      res.send()
      return
    }
  })

  res.status(200)
  res.send()
    
})
  

app.post('/register', async (req,res) => {
  
  console.log(req.body);

  

  const login_dir = path.join(__dirname, "login")
  const login_path = path.join(login_dir, "login_" + req.body.userEmailRef + ".json")

  //if directory doesn't exist
  if (!fs.existsSync(login_dir)){
      fs.mkdirSync(login_dir);
  }



  
  //write the file 
 
  bcrypt.genSalt(10).then((salt) => bcrypt.hash(req.body.password, salt)).then((hash) => {

    fs.appendFile(login_path, JSON.stringify({
      email: req.body.userEmailRef, 
      password: hash, 
      firstname: req.body.userFirstnameRef,
      lastname: req.body.userLastnameRef,
      salt: salt
    }) , err => {
      if (err) {
        console.error(err)
        res.status(500)
        res.send()
        return
      }
    })
  
    res.status(200)
    res.send()

  });
  
  

  
    
})

app.post('/login', async (req,res) => {
  console.log(req.body);


  //sec
  
  

  const login_dir = path.join(__dirname, "login")
  const login_path = path.join(login_dir, "login_" + req.body.username + ".json")

  console.log(login_path)

  
  //read the file 
  let file;
  let user;

  if (fs.existsSync(login_path)) {
    console.log("wewewewewewewewewe")
    file = await fs.readFileSync(login_path,  err => {
        
      if (err) {
        console.log("errorr")
        console.error(err)
        res.status(500)
        res.send()
        return
      } 
    })

    console.log("not error")
    user = JSON.parse(file)
  
    console.log(req.body.password, user.password)

    

    let accountExists = false;
    if(req.body.password && user.password){
      accountExists = await bcrypt.compare(req.body.password, user.password);
    } else {
      res.status(500)
    }
    
    if(accountExists){
      res.status(200)
    } else {
      console.log(accountExists)
      res.status(400)
    }
  } else {
    console.log("path doesn't exist")
    res.status(500)
  }

  
  
  res.send()
  
    
})

/*
https
  .createServer(
    credentials,
    app
  ).listen(port, (err) => {
  if(err){console.log(err)}
  console.log(` listening at http://188.68.34.120:${port}`)
})*/


app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`)
})