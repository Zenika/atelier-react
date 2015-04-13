'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

// TODO Render the root element into the view
Router.run(routes, (Main) => {
  React.render(<Main />, document.getElementById('view'));
});
