// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// import './styles/normalize.scss';
// import './styles/global.scss';
// import 'font-awesome/css/font-awesome.min.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.querySelector('#root')
);


