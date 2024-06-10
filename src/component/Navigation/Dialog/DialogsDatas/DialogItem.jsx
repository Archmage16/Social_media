import React from 'react'
import { NavLink } from 'react-router-dom'


const Dialog = (props) => {
  let path = '/Dialogs/'+ props.id
  return (
      <li><NavLink to={path}>{props.name}</NavLink></li>
  )
}
export default Dialog