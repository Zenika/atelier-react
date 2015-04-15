## TP 4
Ecrire vos propes tests



* Le but est d'ajouter une fonction de filtre sur les bières
* Puis d'écrire vos tests pour la nouvelle fonctionnalité



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
