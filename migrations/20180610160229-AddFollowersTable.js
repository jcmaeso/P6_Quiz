'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('followers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: Sequelize.INTEGER,
        validate: { notEmpty: { msg: "User ID no puede ser vacio" } }
      },
      followerId: {
        type: Sequelize.INTEGER,
        validate: { notEmpty: { msg: "Follower ID no puede ser vacio" } }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    },
      {
        sync: { force: true }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('followers');
  }
};
