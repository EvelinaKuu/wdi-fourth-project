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
      image: '../src/assets/images/users/User-0.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Nancy',
      lastname: 'Bishop',
      username: 'nancy75',
      email: 'nancy.bishop@hotmail.com',
      image: '../src/assets/images/users/User-1.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {firstname: 'Nicole',
      lastname: 'Morgan',
      username: 'nicky_notting_hill',
      email: 'nicky_morgan@hotmail.com',
      image: '../src/assets/images/users/User-2.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Victoria',
      lastname: 'West',
      username: 'QueenVictoria',
      email: 'vicky.west@hotmail.com',
      image: '../src/assets/images/users/User-3.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Hanna',
      lastname: 'Smith',
      username: 'msSmith',
      email: 'hanna.smith@hotmail.com',
      image: '../src/assets/images/users/User-4.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Max',
      lastname: 'Schmidt',
      username: 'evergreen72',
      email: 'evergreen72@hotmail.com',
      image: '../src/assets/images/users/User-5.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Lilian',
      lastname: 'Norris',
      username: 'LilyOfTheValley',
      email: 'lily@hotmail.com',
      image: '../src/assets/images/users/User-6.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Felicia',
      lastname: 'Anderson',
      username: 'FeliciaA',
      email: 'felicia-1985@hotmail.com',
      image: '../src/assets/images/users/User-7.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Andrea',
      lastname: 'Nordstrom',
      username: 'AndreaNordstrom',
      email: 'andrea.nordstrom@hotmail.com',
      image: '../src/assets/images/users/User-8.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Anna',
      lastname: 'Bergqvist',
      username: 'AnnaB',
      email: 'anna.bergqvist@hotmail.com',
      image: '../src/assets/images/users/User-9.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Heidi',
      lastname: 'Flores',
      username: 'Flores-72',
      email: 'heidi.flores@hotmail.com',
      image: '../src/assets/images/users/User-10.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Miranda',
      lastname: 'Kevin',
      username: 'Miranda_Kevin',
      email: 'miranda.kevin@hotmail.com',
      image: '../src/assets/images/users/User-11.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Eva',
      lastname: 'Ferrero',
      username: 'Eva-loves-Ted-Baker',
      email: 'eva.ferrero@hotmail.com',
      image: '../src/assets/images/users/User-12.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Malin',
      lastname: 'Vikstrom',
      username: 'MalinV',
      email: 'malin.vikstrom@hotmail.com',
      image: '../src/assets/images/users/User-13.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Emily',
      lastname: 'Combs',
      username: 'EmilyC',
      email: 'emily.combs@hotmail.com',
      image: '../src/assets/images/users/User-14.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Evelyn',
      lastname: 'Anderson',
      username: 'EA-79',
      email: 'evelyn79anderson@hotmail.com',
      image: '../src/assets/images/users/User-15.png',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);


    return Item
      .create([{
        title: 'Levis jeans, size 30',
        image: '../src/assets/images/items/jeans-1.png',
        price: 15,
        category: 'Jeans',
        description: 'Light blue jeans, never used, but wrong size.',
        createdBy: users[4]._id,
        comments: [
          {
            content: 'Are these 100% cotton?',
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
        createdBy: users[0]._id,
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
        createdBy: users[0]._id,
        comments: [
          {
            content: 'Soo, pretty!!!',
            createdBy: users[1]._id
          }
        ]
      },
      {
        title: 'Stiletto heels, size EU37',
        image: 'https://images.pexels.com/photos/66856/women-s-shoes-red-pin-fashion-66856.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
        price: 20,
        category: 'Shoes',
        description: 'Bought these for a wedding, but have not used them since.',
        createdBy: users[2]._id,
        comments: []
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
