import express from "express";
import path from 'path';
import cookieParser from 'cookie-parser'
import logger from 'morgan';
import { sequelize } from "./models";

const app = express();
const port = 1337

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req, res) => {
  res.send(`hello world ... ${Math.random()}`)
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

module.exports = app;