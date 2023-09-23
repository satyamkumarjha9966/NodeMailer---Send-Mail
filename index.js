const express = require("express");
const sendMail = require("./utils/sendMail");

const app = express();

app.use(express.json());

app.post("/sendmail", async (req, res) => {
  const { email, name } = req.body; // to == email
  const text = `Hii! Welcome Back ${name}`;
  const subject = "Thanks For Being Here";
  sendMail(email, subject, text); // to == email
  res.status(200).send({ msg: "Mail Successfully Send" });
});

app.listen(8082, () => {
  console.log("Server Started on Port No 8082");
});
