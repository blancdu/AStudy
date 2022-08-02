import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
import env from '../../utils/env';
const { host, username, password, name, port } = env.database;

export const sequelize = new Sequelize(name, username, password, {
    host,
    port,
    dialect: 'mysql',
    timezone: '+09:00',
    models: [User],
});
