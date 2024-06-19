import store from './redux/rudex-store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './component/App'
// import { addMess, addPost, updateNewMess, updateNewposttext } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderTree = (state) => {
    root.render(
        <App appState = {state} 
            // dispatchProf = {store.dispatch.bind(store)} 
            dispatchMess = {store.dispatch.bind(store)}
            store = {store}
        />)
}
rerenderTree(store.getState())
// console.log(store.getState().Profile.posts);

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})