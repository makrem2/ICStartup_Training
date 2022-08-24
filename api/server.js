const express = require("express");
const cors = require("cors");
const userRoutes = require("./routers/user-routers");
const db = require("./models");
const bodyParser = require("body-parser");
const nodeMail = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Request-Method", "*");
  res.setHeader("Acces-Control-Allow-Headers", "*");
  next();
});

// Set up CORS
app.use(
  cors({
    origin: true, // "true" will copy the domain of the request back
    // to the reply. If you need more control than this
    // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
    // authenticated via either a session cookie
    // or Authorization header. Otherwise the
    // browser will block the response.

    methods: "POST,GET,PUT,PATCH,OPTIONS,DELETE", // Make sure you're not blocking
    // pre-flight OPTIONS requests
  })
);

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use("/Images", express.static(path.join("api/Images")));

// routers

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("hello word");
});

const categoryrouter = require("./routers/Category-routers");
app.use("/api/category", categoryrouter);

const formateurrouter = require("./routers/formateur-routers");
app.use("/api/formateur", formateurrouter);

const formationrouter = require("./routers/formation-routers");
app.use("/api/formation", formationrouter);

const evenementrouter = require("./routers/Evenement-router");
app.use("/api/evenement", evenementrouter);

const blogrouter = require("./routers/Blog-routers");
app.use("/api/blog", blogrouter);

const etudiantrouter = require("./routers/Etudiant-routers");
app.use("/api/etudiant", etudiantrouter);

const commentairerouter = require("./routers/Commentaire-routers");
app.use("/api/commentaire", commentairerouter);

//static Images Folder

app.use("/Images", express.static("./Images"));

async function mainMail(name, email, subject, message) {
  const transporter = await nodeMail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "makremjebali9@gmail.com",
      pass: "ahiptvmgftznuncx",
    },
  });
  const mailOption = {
    from: email,
    to: "info@icstartup.training",
    subject: subject,
    html: `You got a message from <br>
    Email : ${email} <br>
    Name: ${name} <br>
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

app.post("/contact", async (req, res, next) => {
  const { yourname, youremail, yoursubject, yourmessage } = req.body;
  try {
    await mainMail(yourname, youremail, yoursubject, yourmessage);

    res.send("Vos Message a été soumises avec succès. Merci !");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});
//port

// app.use(express.static(__dirname+'/dist'));

// app.get('/',function(req,res){
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

const PORT = process.env.PORT || 3000;

//server

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
});
