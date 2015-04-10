'use strict';

var React = require('react');

var Router = {
  Link: React.createClass({
    render: function () {
      return <a href={this.props.to} params={this.props.params}></a>
    }
  })
};

module.exports = Router;