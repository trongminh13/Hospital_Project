const Course = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SitesController{
  index(req,res,next){
    Course.find({})
      .then(courses =>{
       
        res.render('home',{ 
          courses: mutipleMongooseToObject(courses)
         });
      
    })
    
      .catch(next);
    }

     
    search(req, res) {
    res.render('search');
  }
}


module.exports = new SitesController();





  // async index(req, res) {

  //   try {

  //       const data = await Course.find({});

  //       res.json(data);

  //   }  catch (err) {

  //       res.status(400).json({error: err});
  //   }
    
  // }



// res.json({
    //   name: 'test'
    // })
  







