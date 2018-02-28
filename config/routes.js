const router = require('express').Router();
const items  = require('../controllers/items');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

// custom routes go here
router.route('/items')
  .get(items.index)
  .post(secureRoute, items.create);

router.route('/items/:id')
  .get(items.show)
  .put(secureRoute, items.update)
  .delete(secureRoute, items.delete);

router.route('/items/:id/comments')
  .post(secureRoute, items.addComment);

router.route('/items/:id/comments/:commentId')
  .delete(secureRoute, items.deleteComment);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
