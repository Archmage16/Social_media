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

export const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='App-wraper'>
        <Head />
        <Menu />
        <Routes>
          {/* <Route index element={
            <Profile 
              profilePage={props.appState.profilePage} 
              addPost = {props.addPost} 
              updateNewposttext = {props.updateNewposttext} 
            />} /> */}

          <Route path='Profile' element={
            <Profile profilePage={props.appState.profilePage} 
              dispatch = {props.dispatch} 
            />}/>
          
          <Route path='Dialogs' element={<Dialogs 
            messageState={props.appState.messagePage} 
            addMess = {props.addMess}
            updateNewMess = {props.updateNewMess}
            />} />

          <Route path='News' element={<New />} />
          <Route path='Music' element={<Musics />} />
          <Route path='Setings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

