import React from 'react'
import Posts from './post/Posts'

const Profile = (props) => {
  
  return (
    <section className='section'>
        <img src='https://static.tildacdn.com/tild3365-3463-4832-b861-656632643732/joshfelise7231.jpg' className='img'/>
        <Posts posts={props.profilePage.posts} 
          newPostText = {props.profilePage.newPostText}
          addPost = {props.addPost}
          updateNewposttext = {props.updateNewposttext}
          />
    </section>
  )
}
export default Profile