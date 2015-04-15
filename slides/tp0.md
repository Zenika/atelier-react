## TP 0
Construire un Hello world en React



* Le but est de créer votre premier composant React
* Il doit juste afficher Hello world <!-- .element: class="fragment" -->
* Les tests sont déjà prêts <!-- .element: class="fragment" -->



Le rendu va se faire dans le fichier _helloworld.jsx_

```jsx
'use strict';

var React = require('react');

var Helloworld = React.createClass({

  // TODO define compoenent render function
});

module.exports = Helloworld;
```



Dans le fichier _init.jsx_, il faut appeler React pour faire le rendu de la vue
```jsx
'use strict';

var React = require('react');
var Hello = require('./helloworld/helloworld.component.jsx');

// TODO Render the root element into the view
```



Pour lancer les tests, il suffit d'exécuter la commande

```sh
gulp test
```



## A vos clavier
![clavier](img/keyboard.gif)
