require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./config/db');
const path = require('path');
const trimmer = require('./middlewares/trimmer');
const setUser = require('./middlewares/setUser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();
app.use(cookieParser(process.env.JWT_SECRET));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setUser);
app.use(trimmer);
app.use(csrf({ cookie: true }));

app.get('*', (req, res, next) => {
    res.cookie('X-CSRF-TOKEN', req.csrfToken());
    next();
});

app.use('/', require('./routes/authRoutes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'dist', 'index.html'));
    });
}

app.listen(3000, () => console.log('Listening on port 3000'));
