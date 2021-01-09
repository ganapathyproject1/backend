const nodemailer = require('nodemailer');
const logger = require('./log-message');

function sendMail(mailOptions) {
  //hidden the password for privacy and security reasons
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: false, 
    auth: {
      user: "todoprojectlive@gmail.com",
      pass: "*****"
    }
  });

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      logger.log(err, `sendMail from ${data.name}`);
    }
  });
  
}

exports.sendFeedback = (data) => {

  const mailOptions = {
    from: `${data.email}`,
    to: 'todoprojectlive@gmail.com',
    subject: `Feedback from ${data.name}`,
    html: `<b>Experience: </b><span>${data.experience}</span><br>
            <b>Feedback: </b><span>${data.feedback}</span><br>
            <b>Email: </b><span>${data.email}</span><br>`
  };

  sendMail(mailOptions);

}

exports.sendRecoveryMail = (data) => {
  
 
  console.log("Email"+data.email)
  const mailOptions = {
    from: "todoprojectlive@gmail.com",
    to: data.email,
    subject: `Password recovery from todo list application`,
    html: `<h3>Dear User,</h3>
          <b>Verification code: </b>${data.verificationCode}<br>
          <div>Click the below link and reset password by providing your verification code.
          Note that the above code will be expired in <b>1 hour</b></div>
          <a href="http://localhost:4200/#/reset-password">Reset Password</a>
          `
  };

  sendMail(mailOptions);
}
