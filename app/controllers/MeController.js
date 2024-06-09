const Course = require("../models/course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {

  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.findDeleted({})])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          courses: mutipleMongooseToObject(courses),
          deletedCount: deletedCount.filter(course => course.deleted).length
        }),
      )
      .catch(next);
  }

  /*storedCourses(req, res, next) {
      Promise.all([Course.find({deleted: true}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) =>
          res.render('me/stored-courses', {
            deletedCount,
            courses: mutipleMongooseToObject(courses),
          })
        )
        
        .catch(next); 
        */

  trashCourses(req, res, next) {
    //get courses/:create
    Course.findWithDeleted({ deleted: true })
      .then(courses => res.render('me/trash-courses', {
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next);
  }
  /*storedCourses(req, res, next) {
    Promise.all([Course.find({deleted: true}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        })
      )
      
      .catch(next); 
    

    //get courses/:create
    // Course.find({})
    //   .then(courses => res.render('me/stored-courses', {
    //     courses: mutipleMongooseToObject(courses)
    //   }))
    //   .catch(next);
  }*/




  //   Promise.all([pokemonQuery, Pokemon.countDocumentsDeleted()])
  //   .then(([pokemons, deletedCount]) => {
  //       res.render('user/stored-pokemons', {
  //           deletedCount,
  //           pokemons: multipleMongooseToObject(pokemons),
  //       })
  //   })
  //   .catch(next)
  // }




}



//post course/store


module.exports = new MeController();


