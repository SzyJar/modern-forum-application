require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./routes/api.js');


const app = express();

// Middleware
app.use(
    helmet.contentSecurityPolicy(),
    helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }),
    helmet.xssFilter(),
    helmet.frameguard({ action: 'deny' }),
    helmet.hsts({ maxAge: 31536000, includeSubDomains: true }),
    helmet.hidePoweredBy()
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
apiRoutes(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));