import React, { createRef } from 'react'
import Post from './Post';
import './post.css'



const Posts = (props) => {

  let postElements = 
    props.posts.map(p => 
      <Post message={p.message} key={p.id} image={p.image} name={p.name} 
    />);
    
    let createRefs = React.createRef()

    let addPost = () =>{
      props.dispatch({type: 'ADD-POST'})
    };

    let Changes = () => {
      let data = createRefs.current.value;
      props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText : data})
    };

    let Sub = (e) => {
      e.preventDefault()
    }
  return (
    <div>
        <div className='comment'>{postElements}</div>
         <div>
            <form action="" onSubmit={Sub}>
              <textarea onChange={Changes} ref={createRefs} 
                value={props.newPostText}></textarea><br/>
              <button onClick={addPost} >Add</button>
              <button>Remove</button>
            </form>
        </div>
    </div>
  )
}
export default Posts