import { Sequelize, Dialect, Model } from "sequelize";
import { dbConfig } from "../config/db.config";
import path, { basename } from "path";
import fs from "fs";
import { applyExtraSetup } from './extra-setup'
import { SequelizeMethod } from "sequelize/types/utils";

export const sequelizeConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect as Dialect,
    port: dbConfig.port,
    pool: {
        ...dbConfig.pool
    }
});

// const db = {
//     sequelize: sequelize,
//     Sequelize: Sequelize,
// } as {
//     sequelize: Sequelize;
//     Sequelize: typeof Sequelize;
//     [key: string]: any;

// }

// const models = path.join(__dirname, 'models');
// fs.readdirSync(models).forEach(file => {
//     console.log('##file--', file)
//     const model = require(path.join(models, file))(sequelize)
//     console.log('++++model', model)
//     db[model.name] = model;
// })


// applyExtraSetup(db);


// db.sequelize.authenticate().then(() => {
//     console.log('DB connection established successfully.')
// }).catch(err => {
//     console.error('Unable to connect to DB', err);
// })

// export { db };