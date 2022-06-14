import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import store from './store/index'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// store={store} provides the central data store to the app; now all components can tap into the store (get data out) and dispatch actions