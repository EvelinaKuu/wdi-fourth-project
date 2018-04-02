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
      image: '/assets/images/users/User-0.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Nancy',
      lastname: 'Bishop',
      username: 'nancy75',
      email: 'nancy.bishop@hotmail.com',
      image: '/assets/images/users/User-1.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {firstname: 'Nicole',
      lastname: 'Morgan',
      username: 'nicky_notting_hill',
      email: 'nicky_morgan@hotmail.com',
      image: '/assets/images/users/User-2.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Victoria',
      lastname: 'West',
      username: 'QueenVictoria',
      email: 'vicky.west@hotmail.com',
      image: '/assets/images/users/User-3.png',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      firstname: 'Hanna',
      lastname: 'Smith',
      username: 'msSmith',
      email: 'hanna.smith@hotmail.com',
      image: '/assets/images/users/User-4.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Max',
      lastname: 'Schmidt',
      username: 'evergreen72',
      email: 'evergreen72@hotmail.com',
      image: '/assets/images/users/User-5.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Lilian',
      lastname: 'Norris',
      username: 'LilyOfTheValley',
      email: 'lily@hotmail.com',
      image: '/assets/images/users/User-6.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Felicia',
      lastname: 'Anderson',
      username: 'FeliciaA',
      email: 'felicia-1985@hotmail.com',
      image: '/assets/images/users/User-7.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Andrea',
      lastname: 'Nordstrom',
      username: 'AndreaNordstrom',
      email: 'andrea.nordstrom@hotmail.com',
      image: '/assets/images/users/User-8.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Anna',
      lastname: 'Bergqvist',
      username: 'AnnaB',
      email: 'anna.bergqvist@hotmail.com',
      image: '/assets/images/users/User-9.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Heidi',
      lastname: 'Flores',
      username: 'Flores-72',
      email: 'heidi.flores@hotmail.com',
      image: '/assets/images/users/User-10.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Miranda',
      lastname: 'Kevin',
      username: 'Miranda_Kevin',
      email: 'miranda.kevin@hotmail.com',
      image: '/assets/images/users/User-11.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Eva',
      lastname: 'Ferrero',
      username: 'Eva-loves-Ted-Baker',
      email: 'eva.ferrero@hotmail.com',
      image: '/assets/images/users/User-12.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Malin',
      lastname: 'Vikstrom',
      username: 'MalinV',
      email: 'malin.vikstrom@hotmail.com',
      image: '/assets/images/users/User-13.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Emily',
      lastname: 'Combs',
      username: 'EmilyC',
      email: 'emily.combs@hotmail.com',
      image: '/assets/images/users/User-14.png',
      password: 'password',
      passwordConfirmation: 'password'
    },{
      firstname: 'Evelyn',
      lastname: 'Anderson',
      username: 'EA-79',
      email: 'evelyn79anderson@hotmail.com',
      image: '/assets/images/users/User-15.png',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);


    return Item
      .create([{
        title: 'Levis jeans, size 26',
        image: '/assets/images/items/jeans-1.png',
        price: 15,
        category: 'Jeans',
        description: 'Light blue jeans, never used, bought wrong size.',
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
      },{
        title: 'Ankle boots, size 7',
        image: '/assets/images/items/ankle-boots-raid.png',
        price: 20,
        category: 'Shoes',
        description: 'Leather Raid ankle boots, used just a couple of times, like new.',
        createdBy: users[6]._id,
        comments: [
          {
            content: 'Any marks on these?',
            createdBy: users[5]._id
          }
        ]
      },{
        title: 'Palladium boots, size 7.5',
        image: '/assets/images/items/palladium-black.png',
        price: 12,
        category: 'Shoes',
        description: 'Black Palladium boots. Worn for one fall.',
        createdBy: users[2]._id,
        comments: [
          {
            content: 'Could you post a photo showing any marks on them?',
            createdBy: users[5]._id
          }
        ]
      },{
        title: 'Pleated pants',
        image: '/assets/images/items/pleats.png',
        price: 15,
        category: 'Trousers',
        description: 'Greenish pleated wide leg pants. Bought from H&M.',
        createdBy: users[7]._id,
        comments: [
          {
            content: 'Are they green or more brown?',
            createdBy: users[8]._id
          }
        ]
      },{
        title: 'Pleated pants EU36',
        image: '/assets/images/items/check.png',
        price: 15,
        category: 'Trousers',
        description: 'Check trousers, 100% cotton.',
        createdBy: users[7]._id,
        comments: [
          {
            content: 'Which UK size would you say these are?',
            createdBy: users[8]._id
          }
        ]
      },{
        title: 'Dr Martens, sixe 6',
        image: '/assets/images/items/dr-martens.png',
        price: 15,
        category: 'Shoes',
        description: 'Black leather drmartens, never used, bought wrong size.',
        createdBy: users[1]._id,
        comments: [
          {
            content: 'I want to buy these! I will send you an email.',
            createdBy: users[6]._id
          },
          {
            content: 'Great!',
            createdBy: users[1]._id
          }
        ]
      },{
        title: 'New Timberland boots',
        image: '/assets/images/items/timberland-beige.png',
        price: 15,
        category: 'Shoes',
        description: 'Unworn Beige Timberland boots.',
        createdBy: users[7]._id,
        comments: [
          {
            content: 'I think you forgot to post which size these are :)',
            createdBy: users[8]._id
          }
        ]
      },{
        title: 'Levis jeans, size 30',
        image: '/assets/images/items/black-levis.png',
        price: 17,
        category: 'Jeans',
        description: 'Brown, never used, but wrong size.',
        createdBy: users[9]._id,
        comments: [
          {
            content: 'How stretchy are these?',
            createdBy: users[10]._id
          }
        ]
      },{ title: 'Hunter boots, size 6',
        image: '/assets/images/items/hunter-black.png',
        price: 15,
        category: 'Shoes',
        description: 'Black Hunter boots, used but still in a pretty good shape.',
        createdBy: users[10]._id,
        comments: [
          {
            content: 'Is there any marks on these?',
            createdBy: users[1]._id
          },
          {
            content: 'Yes, a few ones, hence the price.',
            createdBy: users[10]._id
          }
        ]
      },{
        title: 'Brown Converse shoes size 5.5',
        image: '/assets/images/items/brown-leather-converse.png',
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
        image: '/assets/images/items/top-blue.png',
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
      },{
        title: 'Purple velvet dress, size 8',
        image: '/assets/images/items/sandro-velvet-dress.png',
        price: 40,
        category: 'Dresses',
        description: 'Purple velvet dress by Sandro, size 8.',
        createdBy: users[8]._id,
        comments: [
          {
            content: 'Would you say it true to size?',
            createdBy: users[9]._id
          },{
            content: 'Definitely! I ware size 8 and it fits me perfectly!.',
            createdBy: users[8]._id
          }]
      },{
        title: 'Leather buckle belt',
        image: '/assets/images/items/leather-buckle-belt.png',
        price: 10,
        category: 'Other accessiories',
        description: 'Vintage belt',
        createdBy: users[7]._id,
        comments: [
          {
            content: 'How long is the belt?',
            createdBy: users[1]._id
          }
        ]
      },{
        title: 'Moschino dress, size M',
        image: '/assets/images/items/moschino-dress.png',
        price: 50,
        category: 'Dresses',
        description: 'My little pony themed dress, size M, original price 370. 100% cotton, short sleeves ',
        createdBy: users[11]._id,
        comments: [
        ]
      },{
        title: 'Whistles leather skirt, size XS',
        image: '/assets/images/items/whistles-black.png',
        price: 50,
        category: 'Skirts',
        description: 'A-line weather skirt',
        createdBy: users[8]._id,
        comments: [
        ]
      },{
        title: 'Denim skirt, size EU38',
        image: '/assets/images/items/missguided-denim.png',
        price: 10,
        category: 'Skirts',
        description: 'Denim skirt, high-rise, five pockets',
        createdBy: users[7]._id,
        comments: [
        ]
      },{
        title: 'Escada check trousers, size EU38',
        image: '/assets/images/items/escada-check.png',
        price: 30,
        category: 'Trousers',
        description: 'Ankle-length trousers',
        createdBy: users[7]._id,
        comments: []
      },{
        title: 'Skinny, leather trousers, size FR36',
        image: '/assets/images/items/skinny.png',
        price: 60,
        category: 'Trousers',
        description: 'High-waist, skinny leather trousers, press studd details on the ankles.',
        createdBy: users[4]._id,
        comments: [
          {
            content: 'Could I try these on before buying?',
            createdBy: users[8]._id
          }
        ]
      },{
        title: 'Trench coat',
        image: '/assets/images/items/trench-coat-blue.png',
        price: 30,
        category: 'Coats',
        description: 'Blue trench coat. Size 8.',
        createdBy: users[6]._id,
        comments: [
          {
            content: 'What/s the brand?',
            createdBy: users[5]._id
          }
        ]
      },{
        title: 'Brown leather bag',
        image: '/assets/images/items/zara-brown.png',
        price: 20,
        category: 'Bags',
        description: 'Mid-brown leather bag',
        createdBy: users[6]._id,
        comments: [
          {
            content: 'How is the inside of the bag? Any marks of tear?',
            createdBy: users[0]._id
          }
        ]
      },{
        title: 'Vintage bucket bag',
        image: '/assets/images/items/vintage-bucket-bag.png',
        price: 20,
        category: 'Bags',
        description: '100% jute',
        createdBy: users[9]._id,
        comments: []
      },{
        title: 'High UGG boots',
        image: '/assets/images/items/ugg-classic.png',
        price: 20,
        category: 'Shoes',
        description: 'Mid-brown, classic high Uggs. I used them for one winter, but got new ones now. Size is EU36.',
        createdBy: users[6]._id,
        comments: []
      },{
        title: 'A Dickies fleece coat',
        image: '/assets/images/items/fleece-coat-dickies.png',
        price: 20,
        category: 'Coats',
        description: 'Off-white fleece coat with black-white camo details. Size M.',
        createdBy: users[4]._id,
        comments: [
          {
            content: 'Looks really nice and new! How used is it?',
            createdBy: users[9]._id
          }
        ]
      },
      {
        title: 'Stiletto heels, size EU37',
        image: '/assets/images/items/red-stilettos.png',
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
