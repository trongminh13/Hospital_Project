const Course = require("../models/course");
const { mongooseToObject } = require("../../util/mongoose");
const course = require("../models/course");
//kha nang
class CoursesController {
  
  show(req, res, next) {
    // get courses/:slug
    Course.findOne({ slug: req.params.slug})
      .then((courses) =>
        res.render('courses/showdoctorcv', {
          courses: mongooseToObject(courses),
        })
      
      )
      .catch(next);
  }

  create(req, res, next) {
    //get courses/:create
    res.render('courses/create');
  }

  //post course/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);


    course.save()
      // res.send('Hello');
      .then(() => res.redirect('/me/stored/courses'))
      .catch(error => {
        console.error('Error while saving course:', error);
        next(error); // Chuyển lỗi đến middleware xử lý lỗi tiếp theo
      });
  }

  edit(req, res, next) {
    //get courses/:edit
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit', {
        course: mongooseToObject(course)
      }))
      .catch(next);

  }

  update(req, res, next) {
    //get courses/:edit
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);

  }
  destroy(req, res, next) {
    //get courses/:edit
    Course.delete({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
    

  }

  forceDestroy(req, res, next) {
    //get courses/:force
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
    

  }

  restore(req, res, next) {
    //get courses/:edit
    Course.restore({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
    

  }

  handleFormActions(req, res, next) {
    //get courses/:edit
    switch(req.body.action)
    {
      case 'delete':
        Course.delete({ _id: {$in: req.body.courseIds}})
        .then(() => res.redirect('back'))
        .catch(next);
        break;
        default:
          res.json({mesesage: 'Action is invalid'});

    }
  }



}

module.exports = new CoursesController();




    // const course = new Course(formData);

// course.save()
    // // res.send('Hello');
    //   .then(() => res.redirect('/'))
    //   .catch(error => {
    //     console.error('Error while saving course:', error);
    //     next(error); // Chuyển lỗi đến middleware xử lý lỗi tiếp theo
    //   });



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

/////////////////////////////

/*class CoursesController{
    show(req, res,next) {
      //get courses/:slug
      Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show');
      })
      .catch(next);


  }
}*/

// class CoursesController{
//   show(req, res,next) {
//     //get courses/:slug
//     Course.findOne({ slug: req.params.slug })
//     .then(course => {
//       // res.render('courses/show');
//       res.json(course);
//     })
//     .catch(next);

// }
// }
