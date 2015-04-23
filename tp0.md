## TP 0
Construire un Hello world en React



* Le but est de créer votre premier composant React
* Il doit juste afficher Hello world <!-- .element: class="fragment" -->
* Les tests sont déjà prêts <!-- .element: class="fragment" -->
* Le server node aussi <!-- .element: class="fragment" -->
* Même l'index.html ! <!-- .element: class="fragment" -->



## Les sources
http://zenika.github.io/atelier-react/atelier-react.tar.gz




Le rendu va se faire dans le fichier _helloworld.jsx_

```jsx
'use strict';

var React = require('react');

var Helloworld = React.createClass({

  // TODO define component render function
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



Le but étant de remplir la balise `view`

```html
<body>
    <div class="container">
        <div class="header">
            <h1>Atelier React</h1>
        </div>
        <div id="view"></div>
    </div>
    <script src="bundle.js" />
</body>
```



Pour lancer les tests, il suffit d'exécuter la commande

```sh
gulp test
```



## A vos clavier
![clavier](img/keyboard.gif)

[http://zenika.github.io/atelier-react](http://zenika.github.io/atelier-react)
[https://facebook.github.io/react/docs/component-api.html](https://facebook.github.io/react/docs/component-api.html)



### Un peu d'aide

Pour dire à React de faire le rendu dans view

```jsx
React.render(
  <MonComposant />,
  document.getElementById('view')
);
```