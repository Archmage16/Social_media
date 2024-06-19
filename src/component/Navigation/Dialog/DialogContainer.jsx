import React from 'react'
import { addMessAction, updateNewMessAction } from '../../../redux/Dial-red'
import Dialogs from './Dialogs'

const DialogContainer = (props) => {
  let state = props.store.getState().Dialog
  let addMess = () =>{
    props.store.dispatch(addMessAction())
  };
  let updateNewMess = (datas) => {
    let action = updateNewMessAction(datas);
    props.store.dispatch(action)
  };
  
  return (<Dialogs addMess={addMess} updateNewMess={updateNewMess} 
    dialogs = {state.dialogs}
    messages = {state.messages}
    MessagesNews = {state.MessagesNews}
    Newmess = {state.Newmess}
  />)
}
export default DialogContainer