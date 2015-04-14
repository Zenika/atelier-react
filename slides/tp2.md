## TP2
Découper en composants



* Le but est de répartir le travail entre différents composant
* Un composant élément qui fait le rendu d'un item de la liste
* Un composant liste, qui créer autant de composant éléments que nécéssaire



Comment communiquer entre composant ?

Pas d'héritage ! <!-- .element: class="fragment" -->

Via les propiétés du composant <!-- .element: class="fragment" -->




```jsx
// Dans composant parent
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
// Dans composant enfant
  render: function () {
    return (
      <div>
        <h1>{this.props.foo}</hi>
        ...
      </div>
    );
  }
```