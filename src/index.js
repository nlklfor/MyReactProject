import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: "This team will never trade ⬇", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' },
  { id: 2, message: "Joel chmo", image: 'https://www.kindpng.com/picc/m/104-1042894_transparent-lebron-james-face-png-stephen-curry-face.png' },
  { id: 3, message: "NePon😐", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' }
]
let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Nikitos" },
  { id: 3, name: "Iluha" },
  { id: 4, name: "Atnoha" },
  { id: 5, name: "Kiruha" },
  { id: 6, name: "Egorishe" }
]
let messagesData = [
  { id: 1, message: "Ky" },
  { id: 2, message: "Che nado?" },
  { id: 3, message: "Ta niche" },
  { id: 4, message: "Pon😐😐😐" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesData={messagesData} postsData={postsData} dialogsData={dialogsData} />
  </React.StrictMode>
);

reportWebVitals();
