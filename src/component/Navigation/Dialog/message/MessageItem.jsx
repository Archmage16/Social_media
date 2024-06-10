import React from 'react'

const Message = (props) =>{
    return (
      <div className="message">{props.message}</div>
      )
  }
export const News = (props) =>{
  return (
      <div className="message messageInput">{props.messages}</div>
    )
}
export default Message