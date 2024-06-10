import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className='menu'>
      <Link to='/Profile'>Profile</Link>
      <Link to='/Dialogs'>Message</Link>
      <Link to='/News'>News</Link>
      <Link to='/Music'>Music</Link>
      <Link to='/Setings'>Setings</Link> 
      
    </nav>
    
  )
}
