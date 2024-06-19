import React from 'react'
import { ChangesAction, addPostAction } from '../../../../redux/Prof-red';
import Posts from './Posts';

const PostsContainer = (props) => {
    let state = props.store.getState()
    let addPosts = () =>{
      props.store.dispatch(addPostAction())
    };
    let Changese = (text) => {
        let action = ChangesAction(text)
        props.store.dispatch(action)
    };
  return (<Posts 
    Changese = {Changese} 
    addPosts = {addPosts} 

    posts = {state.Profile.posts}
    newPostText = {state.Profile.newPostText}/>)
}

export default PostsContainer