import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'


const Dialog = (props) => {
  let path = '/Dialogs/'+ props.name
  return (
        <li><NavLink to={path} >{props.name}</NavLink></li>
  )
}
export default Dialog