
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTheWholeTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderTheWholeTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderTheWholeTree(state);
});
reportWebVitals();
