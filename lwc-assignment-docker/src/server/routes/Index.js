var teamRouter = require("./Team");
var memberRouter = require("./Member");

module.exports = function(app){
    
    //define routes
    app.use('/', function(req, res, next){
        console.log('Hello');
        next();
    })
    app.use("/team", teamRouter);
    app.use("/member", memberRouter);
     
}