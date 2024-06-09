const Course = require("../models/course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SignUpController {
  StoreSignuphospital(req, res, next) {
    //get courses/:create
   res.render('me/sign_up_hospital');
}
}

//post course/store


module.exports = new SignUpController();


