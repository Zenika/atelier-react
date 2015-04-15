## TP 2
Découper en composants



* Le but est de répartir le travail entre différents composants
* Un composant élément qui fait le rendu d'un item de la liste
* Un composant liste, qui créé autant de composants éléments que nécessaire



Comment communiquer entre composant ?

Pas d'héritage ! <!-- .element: class="fragment" -->

Via les propriétés du composant <!-- .element: class="fragment" -->




```jsx
// Composant parent
  render: function () {
    return (
      <div>
        <Child foo="bar"/>
        ...
      </div>
    );
  }
```

```jsx
// Composant enfant
  render: function () {
    return (
      <div>
        <h1>{this.props.foo}</hi>
        ...
      </div>
    );
  }
```
