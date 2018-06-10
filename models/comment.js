module.exports = (sequelize,DataType) => {
    return sequelize.define('comment',{
        text: {
            type: DataType.STRING,
            validate: {notEmpty: {msg: 'Text comment cannot be empty'}}
        },
        authorId: {
            type: DataType.INTEGER,
        },
        quizId: {
            type: DataType.INTEGER,
        }
    });
};