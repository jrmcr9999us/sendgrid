// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
// console.log("first", process.env.SENDGRID_API_KEY);
const msg = {
  to: "roma.jeffrey@gmail.com", // Change to your recipient
  from: "roma.jeffrey@gmail.com", // Change to your verified sender
  subject: "Sending jeffrey",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
