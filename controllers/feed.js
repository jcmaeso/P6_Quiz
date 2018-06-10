const {models} = require("../models");
const Sequelize = require("sequelize");


exports.loadFollowers = (req,res,next) =>{
    const user = req.user && req.user.id;
    return models.follower.findAll({where: {userId : user}},{include:[
        {model: models.user, as: "seguidor"}
    ]}).then(users => {
        console.log(users);
        if(users){
            req.followers = users;
            next();
        }else{
            next(new Error("Error buscando followers"));
        }
    }).catch(error => next(error));
};

exports.mustBeLogged = (req,res,next) =>{

}

exports.index = (req,res,next)  =>{
    res.render("feed/index",{
        user: req.user,
        followers: req.followers
    });
};