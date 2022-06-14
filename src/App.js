
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import News from './components/News/News'





const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/profile" element={<Profile profileState={props.state.profileState} addPost={props.addPost} updatePostText={props.updatePostText} />} />
          <Route path="/dialogs" element={<Dialogs dialogsState={props.state.dialogsState} />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
