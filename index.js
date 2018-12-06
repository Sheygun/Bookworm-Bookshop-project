const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const flash = require('express-flash');
// const session = require('express-session');
// const MongoStore = require('connect-mongodb-session')(session);
// const passport = require('passport');
// const mongoose = require('mongoose');

const route = require('./routes/index')

// .use(passport.initialize())
// .use(passport.session())



// const dbName = 'ent_db';
// const connectionString = 'mongodb://localhost:27017/' + dbName;
// mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false });

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .set('trust proxy', 1)

  // .use('/', route)


  .get('/', (req, res) => res.render('pages/index'))
  .get('/motivational', (req, res) => res.render('books/motivational'))
  .get('/educational', (req, res) => res.render('books/educational'))
  .get('/financial', (req, res) => res.render('books/financial'))
  .get('/others', (req, res) => res.render('books/others'))

  .get('/about', (req, res) => res.render('pages/about'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/policy', (req, res) => res.render('pages/policy'))
  .get('/cart', (req, res) => res.render('pages/cart'))

  .get('/error', (req, res, next) => res.render('pages/unprocessed'))

  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

