import '@maket/css/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@js/components/mainComponents/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@state/store';

const wrap = document.querySelector('#wrap');

const root = createRoot(wrap);
root.render(
    <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
