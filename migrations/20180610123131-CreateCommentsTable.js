'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    text: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {msg: "Text must not be empty."}
        }
    },
    authorId:{
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: "Password must not be empty."}}
    },
    quizId: {
        type: Sequelize.STRING
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
      sync: {force: true}
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
