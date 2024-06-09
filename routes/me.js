const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
//slug: bien dong
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);


module.exports = router;
