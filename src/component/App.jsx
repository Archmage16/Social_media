import React from 'react'
import "./app.css"
import { Head } from './head'
import { Menu } from './menu'
import Profile from './Navigation/Sectiob/Profiles.jsx'
import Dialogs from './Navigation/Dialog/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { New } from './Navigation/News/New'
import { Settings } from './Navigation/Set/Settings'
import { Musics } from './Navigation/Music/Musics'
import DialogContainer from './Navigation/Dialog/DialogContainer.jsx'

export const App = (props) => {

  return (
    <BrowserRouter>
      <div className='App-wraper'>
        <Head />
        <Menu />
        <Routes>
          <Route index element={<Profile store = {props.store}
            />}/>

          <Route path='Profile' element={
            <Profile 
              store = {props.store}
              // profilePage={props.appState.Profile} 
              // dispatch = {props.dispatchProf} 
            />}/>
          
          <Route path='Dialogs/' element={<DialogContainer 
            store = {props.store}
            // messageState={props.appState.Dialog} 
            // dispatch = {props.dispatchMess}
            />} />

          <Route path='News' element={<New />} />
          <Route path='Music' element={<Musics />} />
          <Route path='Setings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

