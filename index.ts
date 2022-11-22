import express, { ErrorRequestHandler } from "express";
import path from 'path';
import cookieParser from 'cookie-parser'
import logger from 'morgan';
import { Fixture, Team } from "./db/models";
import { checkPaginationParams } from "./helpers";

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
    res.send('OK')
})

app.get('/fixture', async (req, res) => {
    try {
        const { page = '1', limit = '20' } = req.query;
        if (typeof page !== 'string' || typeof limit !== 'string') {
            res.status(400).send('The request as the pagination params are not strings')
            return;
        }

        const validate = checkPaginationParams({ page, limit })
        if (!validate.valid) {
            res.status(400).send({ errors: validate.errors })
            return;
        }

        const fixture = await Fixture.findAndCountAll({
            limit: parseInt(limit),
            offset: (parseInt(page) - 1) * parseInt(limit),
            include: Team,
        });
        res.send(fixture)

    } catch (err) {
        console.log('err', err);
        res.status(404).send('Something went wrong.')
    }
})


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

module.exports = app;