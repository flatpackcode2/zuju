import { Sequelize } from "sequelize";

const dbConfig = require("../config/db.config");

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: {
        ...dbConfig.pool
    }
});

sequelize.authenticate().then(() => {
    console.log('DB connection established successfully.')
}).catch(err => {
    console.error('Unable to connect to DB', err);
})
