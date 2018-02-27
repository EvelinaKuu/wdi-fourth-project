const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Item      = require('../models/item');

const itemData = [{
  title: 'Light blue jeans, Levi/s, size 30',
  image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=400fdb95a936d87251532ccc05720cec&auto=format&fit=crop&w=800&q=60',
  category: 'Jeans',
  description: 'flsköl'
}, {
  title: 'Brown Converse shoes size 5.5',
  image: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e07cdfda9c9ead392d048eb1fd8f75a9&auto=format&fit=crop&w=800&q=60',
  category: 'Shoes',
  description: 'Impeccable condition: only worn twice'
}, {
  title: 'Blue, off shoulders Bardot top, size UK10',
  image: 'http://images.tedbakerimages.com/row%2Fc%2FPERUI-Frill-detail-Bardot-top-Mid-Blue%2FWS7W_PERUI_MID-BLUE_1.jpg.jpg?o=QaBNJ4XhJEARRvk$NV$ABdGIIRcj&V=SjPL&w=564%26h=705%26q=85',
  category: 'Tops',
  description: 'Worn once!'
} 
];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Item.create(itemData))
  .then(items => console.log(`${items.length} items created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
