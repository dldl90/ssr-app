import React from 'react';
import { hydrate } from 'react-dom';

import { GlobalDataContext } from '../src';
import App from './Application';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedGlobalState = window.GLOBAL_STATE;

// Allow the passed state to be garbage-collected
delete window.GLOBAL_STATE;

hydrate(
  <GlobalDataContext.Provider
    value={{
      navData: preloadedGlobalState,
    }}
  >
    <App />
  </GlobalDataContext.Provider>,
  document.getElementById('root')
);

module.hot.accept();
