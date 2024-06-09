const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./admincp/config/db');
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

// cai phan em bao anh cai nay ne
app.engine('.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      ifClass: function (classValue, options) {
        if (classValue === '01') {
          return options.fn(this);

        }
        return options.inverse(this);
      }
    }
  }));


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

route(app);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});




////////////////////////////////////////////

// app.use(morgan('combined'));

// app.engine('.hbs', engine({ extname: '.hbs' }));



// app.engine(
//   '.hbs',
//   handlebars({
//     extname: '.hbs',
//     helpers: {
//       sum: (a, b) => a + b,
//     }
//   }),
// );

/////////////////////////////////////////////////////////////////////////////////////////////////
// SẮP XẾP LẠI CÁC KẾT QUẢ Ở TRANG QUẢN LÝ

//LOGIC Ở SẮP XẾP

//SẮP XẾP SỐ LƯỢNG(ID) CỦA PHẦN KẾT QUẢ





















/*

const express = require('express');
const morgan = require('morgan');
//
const path = require('path');
const { engine } = require('express-handlebars'); // chu y
//
const app = express();
const port = 3002;
const rootRoutes = express.Router();


const  route  = require('./routes');
module.exports = router;



// lay photo
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended :true
}));
app.use(express.json());

//SMLHTTPREQUEST, FETCH, exIOS
// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine( // chu y 2
  'hbs',
  engine({
    extname: 'hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app);


// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   console.log(req.query.q);
//   res.render('news');
// }); 

// app.get('/search', (req, res) => {
//   console.log(req.query.q);
//   res.render('search');
// });

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');


  
// });
// app.post('/search', (req, res) => {
//   console.log(req.query.q);
//   res.send('');
// });



// app.post('/search', (req, res) => {
//   console.log(req.query.q);
//   res.render('search');
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


*/