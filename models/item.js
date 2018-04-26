const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});
commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const itemSchema = mongoose.Schema({
  title: { type: String, required: 'Please provide a title for your item'},
  image: { type: String, required: 'Please provide an image for your item' },
  price: { type: Number, required: 'Please provide a price for your the item'  },
  category: { type: String, required: 'Please provide a category for your item'  },
  description: { type: String, required: 'Please provide a description for your item'  },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
  comments: [ commentSchema ]
}, {
  usePushEach: true
});

itemSchema.methods.belongsTo = function belongsTo(user) {
  // check if the user createed the item is the same as the person who is logged in
  // 'this' is the instance of the item that we are calling the 'belongsTo' method on
  // user is the user object that we will pass this method /the user who is logged in
  return this.createdBy.id === user.id;
};

itemSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Item', itemSchema);
