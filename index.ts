import express, { ErrorRequestHandler } from "express";
import path from 'path';
import cookieParser from 'cookie-parser'
import logger from 'morgan';
import { Fixture } from "./db/models";

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
} as ErrorRequestHandler);

app.get('/', async (req, res) => {
    // const team = Team.build({ name: `random team name ${Math.floor(Math.random() * 10) + 1}`, logo: 'www.google.com' });
    try {
        const fixture = await Fixture.findAndCountAll();
        console.log('Fixture', fixture);
        res.send('This is a message')
    } catch (err) {
        console.log('err', err);
        res.send('This is a message')
    }
})


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

module.exports = app;