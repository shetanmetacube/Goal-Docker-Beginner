// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(cors());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

//Manage Routes
//require("./routes")(app); 
const teamRouter = require("./routes/Team");
const memberRouter = require("./routes/Member");
//define routes
app.use('/', function(req, res, next){
    console.log('Hello');
    next();
})
app.use("/team", teamRouter);
app.use("/member", memberRouter);


const db = require("./models/Index");
db.sequelize.sync({force: false});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/`
    )
);
