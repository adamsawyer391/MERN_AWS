

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//mongo database
mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => console.log('DB connected'))
    .catch( (err) => console.log(err) )

//import routes
const authRoutes = require('./routes/auth');


//app middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use(cors())
// const corsOptions = {
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//     "allowedHeaders": ["sessionId", "Content-Type"],
//     "exposedHeaders": ["sessionId"],
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": true
// }
app.use(cors({ origin: process.env.CLIENT_URL }))
//app.use(cors(corsOptions))


/**
 * middleware
 */
app.use('/api', authRoutes);



/**
 * we need to define what port we want the server to listen on
 */
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is listening on ${port}. Your API is listening and running.`))