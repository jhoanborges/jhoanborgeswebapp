import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

export const PhoneDirectory = sequelize.define('phoneDirectory', {
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
});

export default sequelize;
