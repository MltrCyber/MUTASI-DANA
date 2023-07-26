const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const startServer = require('./proxyLocal');
const { browserMiddleware } = require('./middleware');
const { loginController, submitOTPController, getMutasiController } = require('./browserService');

const app = express();

app.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());

startServer();

app.post('/login', browserMiddleware, loginController);

app.post('/submitOTP', browserMiddleware, submitOTPController);

app.get('/getMutasi/:sessionID', browserMiddleware, getMutasiController);

app.listen(3000, () => console.log('Listening on port 3000'));
