module.exports = (sequelize,DataType) => {
    return sequelize.define('follower',{
        userId:{
            type: DataType.INTEGER,
            validate: {notEmpty: {msg: "User ID no puede ser vacio"}}
        },
        followerId: {
            type: DataType.INTEGER,
            validate: {notEmpty: {msg: "Follower ID no puede ser vacio"}}
        }
    });
};