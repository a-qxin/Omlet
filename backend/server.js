require('rootpath')();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// bodyParser not req in new Express
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));

const cardRouter = require('./cards/card.controller');
const setRouter = require('./cards/set.controller');
app.use('/cards', cardRouter);
app.use('/sets', setRouter);

// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

// module.exports = router;
