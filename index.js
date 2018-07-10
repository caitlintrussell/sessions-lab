
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'SuchAGoodc00ki3',
  resave: false,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  console.log('SESSION: ', req.session);
  next();
});

app.use((req, res, next) => {
  if (!req.session.counter) req.session.count = 0;
  console.log('counter', ++req.session.count);
  next();
});

app.get('/', (req, res, next) => {
  res.send('SUP?');
});

app.listen(8080, () => console.log('Listening @ http://localhost:8080'));
