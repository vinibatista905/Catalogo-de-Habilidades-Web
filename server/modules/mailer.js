// const path = require('path');
const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

// TERCEIRA TENTATIVA
  // const options = {
  //   viewEngine: {
  //     extname: '.hbs',
  //     layoutsDir: path.resolve('../resources/mail/views/email'),
  //     defaultLayout : 'template',
  //     partialsDir : path.resolve('../resources/mail/views/partials')
  //   },
  //   viewPath: path.resolve('../resources/mail/views/email'),
  //   extName: '.hbs'
  // }
  

  // transport.use('compile', hbs(options))


// SEGUNDA TENTATIVA
  // transport.use('compile', hbs({
  //   viewEngine: {
  //     defaultLayout: undefined,
  //     partialsDir: path.resolve('../resources/mail')
  //   },
  //   viewPath: path.resolve('../resources/mail'),
  //   extName: '.html',
  // }));

// PRIMEIRA TENTATIVA
//   transport.use('compile', hbs({
//       viewEngine: 'handlebars',
//       viewPath: path.resolve('../resources/mail/'),
//       extName: '.html',
//   }));

  module.exports = transport;