const Item = require('../models/item');

function itemsIndex(req, res, next) {
  Item
    .find()
    .exec()
    .then(items => res.json(items))
    .catch(next);
}

function itemsCreate(req, res, next) {

  req.body.createdBy = req.currentUser;

  Item
    .create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next);
}

function itemsShow(req, res, next) {
  Item
    .findById(req.params.id)
    .populate( 'createdBy' )
    .populate( 'comments.createdBy')
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      res.json(item);
    })
    .catch(next);
}

function itemsUpdate(req, res, next) {
  delete req.body.comments;
  delete req.body.createdBy;

  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      item = Object.assign(item, req.body);
      return item.save();
    })
    .then(item => res.json(item))
    .catch(next);
}

function itemsDelete(req, res, next) {
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      return item.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}
function addCommentRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  console.log(req.body);
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      const comment = item.comments.create(req.body);
      item.comments.push(comment);
      console.log(item);
      item.save();
      return comment;
    })
    .then(comment => res.json(comment))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      const comment = item.comments.id(req.params.commentId);
      comment.remove();

      item.save();
      res.json(item);
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function likeRoute(req, res, next) {

  const userId = req.currentUser.id;

  Item
    .findById(req.params.id)
    .populate( 'comments.createdBy createdBy' )

    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      item.likes.push(userId);

      return item.save();
    })
    .then((item) => {
      return res.json(item);
    })
    .catch(next);
}

function unlikeRoute(req, res, next) {

  const userId = req.currentUser.id;

  Item
    .findById(req.params.id)
    .populate( 'comments.createdBy createdBy' )
    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      const index = item.likes.indexOf(userId);
      item.likes.splice(index, 1);

      return item.save();
    })
    .then((item) => {
      return res.json(item);
    })
    .catch(next);
}

module.exports = {
  index: itemsIndex,
  create: itemsCreate,
  show: itemsShow,
  update: itemsUpdate,
  delete: itemsDelete,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute,
  like: likeRoute,
  unlike: unlikeRoute
};
