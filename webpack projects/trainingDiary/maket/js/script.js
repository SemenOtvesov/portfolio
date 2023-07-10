import '@maket/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './redux/store'

const wrap = document.querySelector('#wrap')

ReactDOM.render(
    <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    wrap
)
