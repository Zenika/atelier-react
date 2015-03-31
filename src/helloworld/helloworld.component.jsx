'use strict';

var React = require('react');

var Helloworld = React.createClass({

  // TODO define compoenent render function
  render: function () {
    return (
      <div key="1">
        <h2>Hello world !</h2>
      </div>
    );
  }
});

module.exports = Helloworld;