const newsRouter = require('./news');
const meRouter = require('./me');
const signupRouter = require('./sign_up');
const coursesRouter = require('./courses');
const SiteRouter = require('./sites');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/me', signupRouter);
  app.use('/courses', coursesRouter);
  app.use('/', SiteRouter);
}

module.exports = route;