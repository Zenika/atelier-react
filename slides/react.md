## Qu'est-ce que c'est ?
* Une library orientée composant <!-- .element: class="fragment" -->
* Le Virtual DOM <!-- .element: class="fragment" -->
* Un flux de données unidirectionnel <!-- .element: class="fragment" -->



## Un langage
Le JSX



```jsx
// div.component.jsx

'use strict';
var React = require('react');

var DivComponent = React.createClass({
 render: function () {
   return <div />;
 };
});

module.exports = DivComponent;
```



## Des outils
* CommonJS ![Webpack](img/webpack.png)
* Jest ![jest](img/jest.png)