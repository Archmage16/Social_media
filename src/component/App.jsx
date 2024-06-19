import React from 'react'
import "./app.css"
import { Head } from './head'
import { Menu } from './menu'
import Profile from './Navigation/Sectiob/Profiles.jsx'
import { Route, Routes } from 'react-router-dom'
import { New } from './Navigation/News/New'
import { Settings } from './Navigation/Set/Settings'
import { Musics } from './Navigation/Music/Musics'
import DialogContainer from './Navigation/Dialog/DialogContainer.jsx'

export const App = (props) => {
  return (
      <div className='App-wraper'>
        <Head />
        <Menu />
        <Routes>
          <Route index element={<Profile />}/>

          <Route path='Profile' element={<Profile />}/>
          
          <Route path='Dialogs/' element={<DialogContainer />} />

          <Route path='News' element={<New />} />

          <Route path='Music' element={<Musics />} />

          <Route path='Setings' element={<Settings />} />
        </Routes>
      </div>
  )
}