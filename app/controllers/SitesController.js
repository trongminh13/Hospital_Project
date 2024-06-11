const Course = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const fs = require('fs');
const path = require('path');

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

// class SitesController{
//   index(req, res, next) {
//     fs.readFile(path.join(__dirname, '..','..', 'Database', 'benhvien.json'), 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading benhvien.json:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         const courses = JSON.parse(data);
//         console.log(courses)
//         res.render('home', { courses: courses });
//     });
// }
     
//     search(req, res) {
//     res.render('search');
//   }
// }

module.exports = new SitesController();







