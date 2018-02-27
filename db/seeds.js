const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

const Item = require('../models/item');
const User = require('../models/user');

Item.collection.drop();
User.collection.drop();

User
  .create([
    { firstname: 'Madeleine',
      lastname: 'Vincent',
      username: 'maddie87',
      email: 'maddie@hotmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Nancy',
      lastname: 'Bishop',
      username: 'nancy75',
      email: 'nancy.bishop@hotmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {firstname: 'Nicole',
      lastname: 'Morgan',
      username: 'nicky_notting_hill',
      email: 'nicky_morgan@hotmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Victoria',
      lastname: 'West',
      username: 'QueenVictoria',
      email: 'vicky.west@hotmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Hanna',
      lastname: 'Smith',
      username: 'msSmith',
      email: 'hanna.smith@hotmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);


    return Item
      .create([{
        title: 'Levis jeans, size 30',
        image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=400fdb95a936d87251532ccc05720cec&auto=format&fit=crop&w=800&q=60',
        price: 15,
        category: 'Jeans',
        description: 'Light blue jeans, never used, but wrong size.',
        soldBy: users[4]._id,
        comments: [
          {
            content: 'Are these 100 % cotton',
            createdBy: users[3]._id
          },
          {
            content: 'Yes, they are.',
            createdBy: users[4]._id
          }
        ]
      }, {
        title: 'Brown Converse shoes size 5.5',
        image: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e07cdfda9c9ead392d048eb1fd8f75a9&auto=format&fit=crop&w=800&q=60',
        price: 25,
        category: 'Shoes',
        description: 'Impeccable condition: only worn twice.',
        soldBy: users[0]._id,
        comments: [
          {
            content: 'Would you say these are dark brown or just brown?',
            createdBy: users[1]._id
          },{
            content: 'I think they are quite dark brown.',
            createdBy: users[0]._id
          },
          {
            content: 'Any stains on them? Can we meet at Notting Hill gate? I want to buy these if there clean.',
            createdBy: users[4]._id
          }
        ]
      }, {
        title: 'Blue, off shoulders Bardot top, size UK10',
        image: 'http://images.tedbakerimages.com/row%2Fc%2FPERUI-Frill-detail-Bardot-top-Mid-Blue%2FWS7W_PERUI_MID-BLUE_1.jpg.jpg?o=QaBNJ4XhJEARRvk$NV$ABdGIIRcj&V=SjPL&w=564%26h=705%26q=85',
        price: 10,
        category: 'Tops',
        description: 'Worn once! True to size.',
        soldBy: users[0]._id,
        comments: [
          {
            content: 'Soo, pretty!!!',
            createdBy: users[1]._id
          }
        ]
      }]);
  })

  .then((items) => {
    console.log(`${items.length} items created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
