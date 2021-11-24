import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./reducers"

//Запрашиваем данные с локального хранилища
const enhancer = window.localStorage.getItem("storage") ? JSON.parse(window.localStorage.getItem("storage")) : {};
const store = createStore(reducer, enhancer);

store.subscribe(() => {
  window.localStorage.setItem("storage", JSON.stringify(store.getState()))
})
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
