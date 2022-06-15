
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updatePostText } from './redux/state';

let renderTheWholeTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText} />
        </React.StrictMode>
    );
}

renderTheWholeTree(state);
subscribe(renderTheWholeTree);
reportWebVitals();
