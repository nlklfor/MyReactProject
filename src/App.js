
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer';





const App = (props) => {
  return (
        <div className='wrapper'>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
  );
}



export default App;
