const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
//slug: bien dong
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.destroy);
router.delete('/:id/force', coursesController.forceDestroy);

router.get('/:slug', coursesController.show);

module.exports = router;
