import React, { useState } from 'react';
import './post.css'
const Post = (props) => {
  const [likeCount, likescounter] = useState(0)
  return (
    <div>
      <h2 className='name'>{props.name}</h2>
      <div className='df'>
        <div>
          <img src={props.image} className='postimage'/>
        </div>
        <li>{props.message}</li>
        <button className='likes' onClick={() => likescounter(likeCount+1)}>👍🏼{likeCount}</button>
      </div>
      
    </div>
  )
}

export default Post