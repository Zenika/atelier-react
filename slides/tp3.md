## TP 3
Flux, le pattern unidirectionnel



* Le but est de mettre en place le pattern flux dans notre application
* Pour cela nous allons utiliser l'implémentation [Reflux](https://github.com/spoike/refluxjs)
* Nous allons implémenter deux nouveaux types d'objets
    * les actions
    * les stores



### Les actions



* Le composant va déclencher l'action de lister les bières
* C'est l'action qui va faire l'appel à l'API REST
* Puis elle va notifier le store



* Dans Reflux, il suffit de déclarer le nom de l'action
* Son appel va automatiquement notifier les stores qui l'écoutent
* Si l'action est appelée avec un paramètre, celui ci est transmis au store



```jsx
// Déclaration
var Actions = Reflux.createActions([
    'foo',
    'bar'
  ]);

// Usage
Actions.foo();
```



### Les stores



* Le store écoute une ou plusieurs actions
* Il peut aussi écouter d'autres stores
* C'est lui qui va transmettre les données au composant



```jsx
var Store = Reflux.createStore({

  init: function() {
    this.listenTo(Actions.foo, this.foo);
  },

  foo: function(data) {
    this.trigger(data);
  }
});
```



### Les composants



* Il écoute un ou plusieurs stores
* Il déclenche les actions



```jsx
var Component = React.createClass({
  mixins: [Reflux.ListenerMixin],

  onStoreChange: function(data) {
    this.setState({
      foo: data
    });
  },

  componentDidMount: function() {
    this.listenTo(Store, this.onStoreChange);
  },

  render: function() { ... }
});
```
