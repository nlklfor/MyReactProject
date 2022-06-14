
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { renderTheWholeTree } from './render';


renderTheWholeTree(state);
reportWebVitals();
