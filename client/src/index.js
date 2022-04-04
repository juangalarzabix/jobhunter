import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import App from './modules/App';
import Career from './modules/career';
import Checkout from './modules/checkout';
import LinkedIn from './modules/linkedin';
import Resume from './modules/resume';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='services/career' element={<Career />} />
      <Route path='services/checkout' element={<Checkout />} />
      <Route path='services/linkedin' element={<LinkedIn />} />
      <Route path='services/resume' element={<Resume />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
