import React from 'react'
import { ChangesAction, addPostAction } from '../../../../redux/Prof-red';
import Posts from './Posts';
import Context from '../../../../Context';

const PostsContainer = () => {
  return (
    <Context.Consumer>
      {(store) => {
          let addPosts = () =>{
            store.dispatch(addPostAction())};

          let Changese = (text) => {
              let action = ChangesAction(text)
              store.dispatch(action)};

          let state = store.getState()
          return <Posts Changese = {Changese} addPosts = {addPosts} 
            posts = {state.Profile.posts}
            newPostText = {state.Profile.newPostText}/>}}
    </Context.Consumer>
  )
}

export default PostsContainer