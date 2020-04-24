const controller = require("./src/controller/item.controller");

module.exports = function(app){
    app.post("/mail", controller.test);
};
// app.get("/mail", controller.mail);