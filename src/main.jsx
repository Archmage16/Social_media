import store from './redux/rudex-store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './component/App'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderTree = () => {
    root.render(
        <BrowserRouter>
            <Context.Provider value={store}>
                <App />   
            </Context.Provider> 
        </BrowserRouter>)
}
rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})