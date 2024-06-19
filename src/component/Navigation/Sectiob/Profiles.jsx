import React from 'react'
import Posts from './post/Posts'
import PostsContainer from './post/Posts-Container'

const Profile = (props) => {
  
  return (
    <section className='section'>
        <img src='https://static.tildacdn.com/tild3365-3463-4832-b861-656632643732/joshfelise7231.jpg' className='img'/>
        <PostsContainer  
          store = {props.store}
          />
    </section>
  )
}
export default Profile