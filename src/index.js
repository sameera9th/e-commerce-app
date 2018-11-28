import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store/configureStore';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap-4-grid/css/grid.css';

const { store, persistor } = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};
render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(NextRoot);
  });
}
registerServiceWorker();
