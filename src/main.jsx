import store from './redux/rudex-store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './component/App'
// import { addMess, addPost, updateNewMess, updateNewposttext } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderTree = (state) => {
    root.render(
        <App appState = {state} 
            dispatchProf = {store.dispatch.bind(store)} 
            dispatchMess = {store.dispatch.bind(store)}
        />)
}
rerenderTree(store.getState())


store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})