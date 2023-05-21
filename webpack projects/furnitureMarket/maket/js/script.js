import '@maket/css/style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import ReactDOM from 'react-dom'

const wrap = document.querySelector('#wrap')




ReactDOM.render(
    <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        wrap
)