const  nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'robotinfo@mkdautomotive.com',
    pass: 'Irl4nda0719'
  }
});

var mailOptions = {
  from: 'MR. Robot',
  to: 'ruben.gonzalez@mkdautomotive.com, rubengm410@gmail.com',
  subject: 'Sending Email using Node.js',
  // text: 'That was easy!'
  html: '<h3>Wellcome</h3><p>That was easy</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: '+info.response);
  }
});
