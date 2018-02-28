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
    // .populate( 'comments.content')
    .populate( 'comments.createdBy')
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

  if(req.file) req.body.image = req.file.filename;

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
  console.log(req.body);
  req.body.createdBy = req.user;
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      const comment = item.comments.create(req.body);
      item.comments.push(comment);

      return item.save()
        .then(() => res.json(comment));
    })
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

      return item.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: itemsIndex,
  create: itemsCreate,
  show: itemsShow,
  update: itemsUpdate,
  delete: itemsDelete,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
