import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './db.db',
});

export const PhoneDirectory = sequelize.define('phoneDirectory', {
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
});

sequelize.sync();

export default sequelize;
