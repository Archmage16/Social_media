import React from 'react'
import { addMessAction, updateNewMessAction } from '../../../redux/Dial-red'
import Dialogs from './Dialogs'
import Context from '../../../Context'

const DialogContainer = () => {
  
  return (
  <Context.Consumer>
    {(store) =>{
      let state = store.getState().Dialog
      let addMess = () =>{
        store.dispatch(addMessAction())
      };
      let updateNewMess = (datas) => {
        let action = updateNewMessAction(datas);
        store.dispatch(action)
      };
      return(
        <Dialogs addMess={addMess} updateNewMess={updateNewMess} 
        messages = {state.messages}
        dialogs = {state.dialogs}
        MessagesNews = {state.MessagesNews}
        Newmess = {state.Newmess}/>
      )
    }}
  </Context.Consumer>
)
}
export default DialogContainer
