'use strict';

exports = module.exports = function(app) {
  
  const items = require('./mens_outerwear.json');

  app.get('/api/mens_outerwear', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/api/mens_outerwear/:id', function(req, res) {
    let id = req.params.id;
    let item = (items.data).filter((element, index, array) => {
      return (element.id === id);
    });
    res.status(200).json(item[0]);
  });
};