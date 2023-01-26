const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (name, email, confirmationCode) => {
    console.log("Helllllow")
    await transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:4000/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
    console.log(name, email, confirmationCode)
  };