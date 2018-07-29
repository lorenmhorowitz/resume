import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<AppContainer>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</AppContainer>, document.getElementById('root'));
registerServiceWorker();
