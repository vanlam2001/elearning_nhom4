import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Toolkits/userSlice';
import { Provider } from 'react-redux';
import courseSlice from './Toolkits/courseSlice';
import formSuccessSlice from './Toolkits/formSuccessSlice';
import spinnerSlice from './Toolkits/spinnerSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    userSlice: userSlice,
    courseSlice: courseSlice,
    formSuccessSlice: formSuccessSlice,
    spinnerSlice: spinnerSlice,
  }
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
