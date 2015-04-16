## TP 4
Ecrire vos propes tests



* Le but est d'ajouter une fonction de filtre sur les bières
* Puis d'écrire vos tests pour la nouvelle fonctionnalité <!-- .element: class="fragment" -->



### Les forms dans React



* Placer une ref sur l'input
* Et une callback sur le changement du form

```jsx
  <form onChange={this.search}>
    <input type="search" ref="searchInput" />
  </form>
```



* Puis la récupérer dans la callback

```jsx
  search: function (event) {
    event.preventDefault();
    var searchInput = React
      .findDOMNode(this.refs.searchInput).value;

    console.log(searchInput);
  },
```



Dans notre cas, il n'y plus qu'à appeler une action avec la valeur de l'input.



### TestUtils



* React viens avec son utilitaire de test, [TestUtils](https://facebook.github.io/react/docs/test-utils.html)
* Il permet de
    * faire un rendu dans une variable
    * récupérer des éléments du rendu
    * simuler des actions/changements



```jsx
var Foo = require('./foo.component.jsx');

var instance = React.renderIntoDocument(<Foo />);
```



```jsx
var ul = TestUtils.findRenderedDOMComponentWithTag(instance, 'ul');

expect(ul).toBeDefined();
```



```jsx
var lis = TestUtils
  .scryRenderedDOMComponentsWithTag(instance, 'li');

expect(lis).toBeDefined();
expect(lis.length).toBe(10);
```



### Pour le reste

* karma/jasmine pour les tests <!-- .element: class="fragment" -->
* rewire pour le mock des sous composants <!-- .element: class="fragment" -->



La doc ...

[http://jasmine.github.io/](http://jasmine.github.io/)

[https://github.com/jhnns/rewire](https://github.com/jhnns/rewire)

Mais surtout, les tests existants <!-- .element: class="fragment" -->