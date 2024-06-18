import React from 'react'
import './dialogs.css'
import Dialog from './DialogsDatas/DialogItem'
import Message, { News } from './message/MessageItem'
import { addMessAction, updateNewMessAction } from '../../../redux/Dial-red'

const Dialogs = (props) => {
  
  let dialogsElem = props.messageState.dialogs.map((d) => 
    <Dialog name={d.name} key={d.id} id={d.id}/>)

  let messElem = props.messageState.messages.map((m) => 
    <Message message={m.message} key={m.id} />)

  let news = props.messageState.MessagesNews.map((n) =>
    <News messages={n.messages} key={n.id}/>
  )
  let newRef = React.createRef()

  let addMess = () =>{
    props.dispatch(addMessAction())
  };
  let updateNewMess = () => {
    let datas = newRef.current.value;
    props.dispatch(updateNewMessAction(datas))
  };
  let Sub = (e) => {
    e.preventDefault()
  }
  return (
    <section className='dialogs'>

      <div className='dialogs-items'>
        <div className='item'>
          <ul className='ul'>{dialogsElem}</ul>
        </div>
      </div>

      <div className='Messages'>
        <div className="Mess">
          {messElem}
          <div className="News">{news}</div>
        </div>
        <div>
          <form action="" onSubmit={Sub} className='answering'>
            <input type='text' placeholder='Answer' onChange={updateNewMess}
            className='Messinput' ref={newRef} value={props.messageState.Newmess}/>
            <button className='Messbtn' onClick={addMess}>✉️</button>
          </form>
        </div>
        </div>
        
    </section>
  )
}
export default Dialogs