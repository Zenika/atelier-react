## TP 1
Lister les bières



* Le but est d'afficher une liste de bières d'[openbeerdatabase](http://openbeerdatabase.com/)
* L'appel REST via [superagent](https://github.com/visionmedia/superagent) à l'API est fourni
* Vous devez construire la list `<ul>` dans la méthode `render()`
* Les tests sont toujours là



L'appel à l'API
```jsx
// Function that list beers for you ;)
var listBeers = function (callback) {
  var url = 'http://api.openbeerdatabase.com/v1/beers.json';

  superagent
    .get(url)
    .end(function (err, response, data) {
      if (err) {
        console.log(err);
      } else {
        var data = JSON.parse(response.text).beers;
        callback(data);
      }
    });
};
```



Le cycle de vie du composant
```jsx
var BeerList = React.createClass({

  // TODO getInitialState

  // TODO componentWillMount

  // TODO render
});
```
