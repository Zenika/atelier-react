var beers = require('./mocks/beers.json');

module.exports = function mockMiddleware(req, res, next) {
  if (/^\/v1/.test(req.url)) {
    if (/^\/v1\/beers\.json/.test(req.url)) {
      res.end(JSON.stringify(beers));
    } else {
      var result = /^\/v1\/beers\/(\d+)\.json/.exec(req.url);
      if (result !== null) {
        var theBeer = beers.beers.filter(function(beer) {
          return beer.id === parseInt(result[1]);
        });
        res.end(JSON.stringify(theBeer[0]));
      }
    }
  } else {
    next();
  }
};
