import store from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './component/App'
// import { addMess, addPost, updateNewMess, updateNewposttext } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderTree = () => {
    root.render(
        <App appState = {store.getState()} 
            dispatchProf = {store.dispatch.bind(store)} 
            dispatchMess = {store.dispatch.bind(store)}
        />
    )
}
rerenderTree(store.getState())


store.sub(rerenderTree)