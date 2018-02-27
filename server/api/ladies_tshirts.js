'use strict';

exports = module.exports = function(app) {
  
  const items = require('./ladies_tshirts.json');

  app.get('/api/ladies_tshirts', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/api/ladies_tshirts/:id', function(req, res) {
    let id = req.params.id;
    let item = (items.data).filter((element, index, array) => {
      return (element.id === id);
    });
    res.status(200).json(item[0]);
  });
};