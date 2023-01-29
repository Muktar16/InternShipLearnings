const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (name, email, confirmationCode) => {
    await transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://192.168.0.140:5432/api/v1/user/confirm?otp=${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => {return false});
    return true;
  };