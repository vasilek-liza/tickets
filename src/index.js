import React from 'react';
import "core-js/stable";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
