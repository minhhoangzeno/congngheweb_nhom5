import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SideBar from './components/share/SideBar';
import './styles/style.scss'
import './styles/common.scss'
import HomePage from './pages/HomePage';
import HomeVideoPage from './pages/HomeVideoPage';
import DetailVideoPage from './pages/DetailVideoPage';
import SeriesPage from './pages/SeriesPage';
ReactDOM.render(
  <React.StrictMode>
    <div className='body'>
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='main'>
        <SeriesPage />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
