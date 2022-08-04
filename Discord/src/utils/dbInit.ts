import { sequelize } from '../db/models';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('DB Connection has been established successfully.');
        await sequelize.sync({ force: true });
        } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();