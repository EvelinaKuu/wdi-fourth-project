const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: 'Please provide a first name' },
  lastname: { type: String, required: 'Please provide a last name' },
  username: { type: String,required: 'Please provide a user name', unique: true },
  email: { type: String, required: 'Please provide an email address', unique: true },
  image: { type: String },
  password: { type: String, required: 'Please provide a password', unique: true }
});

userSchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'createdBy'
});
userSchema.virtual('likes', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'likes'
});

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
