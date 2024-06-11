const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./admincp/config/db");
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      dbFiltered: function (classValue, db) {
        const result = db.filter((item) => {
          return item.class === classValue;
        });
        return result;
      },
    },
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(express.static(path.join(__dirname, "public")));

route(app);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
