const {models} = require("../models");
const Sequelize = require("sequelize");

exports.load = (req,res,next,commentId) => {

    models.comment.findById(commentId).then(comment =>{
        if(comment){
            req.comment = comment;
            next();
        }else{
            next(new Error("There's no comment commentId="+commentId));    
        }
        
    }).catch(error =>{
        next(error);
    });
};

exports.create = (req,res,next) =>{
    const comment = models.comment.build({
        text: req.body.commentText,
        authorId: req.session.user.id || 0,
        quizId: req.quiz.id
    });
    comment.save().then(comment => {
        req.flash('success', 'Comment created successfully.');
        res.redirect("back");
    })
    .catch(Sequelize.ValidationError, error => {
        req.flash('error', 'There are errors in the form:');
        error.errors.forEach(({message}) => req.flash('error', message));
        res.redirect("back");
    })
    .catch(error => {
        req.flash('error', 'Error creating the new tip: ' + error.message);
        next(error);
    });
};
exports.delete = (req,res,next) => {
    req.comment.destroy().then(() =>{
        req.flash('success', 'Comment Deleted suscessfull');
        res.redirect('/quizzes/' + req.params.quizId);
        }).catch(error => next(error));
};

exports.edit = (req,res,next) => {
    res.render('comments/edit',
        {
        quiz: req.quiz,
        comment: req.comment
    });
};

exports.update = (req,res,next) => {
    const {comment} =  req;
    comment.text = req.body.commentText;
    comment.save().then(comment =>{
        req.flash('success','Comment modified');
        res.redirect('back');
    }).catch(Sequelize.ValidationError, error =>{
        req.flash('error','Error in the form');
        error.errors.forEach(({message}) => req.flash('error', message));
        res.redirect("back");
    }).catch(error => next(error));
}