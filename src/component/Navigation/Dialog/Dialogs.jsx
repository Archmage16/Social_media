import React from 'react'
import './dialogs.css'
import Dialog from './DialogsDatas/DialogItem'
import Message, { News } from './message/MessageItem'

const Dialogs = (props) => {
  
  let dialogsElem = props.dialogs.map((d) => 
    <Dialog name={d.name} key={d.id} id={d.id}/>)

  let messElem = props.messages.map((m) => 
    <Message message={m.message} key={m.id} />)

  let news = props.MessagesNews.map((n) =>
    <News messages={n.messages} key={n.id}/>
  )
  let newRef = React.createRef()

  let addMess = () =>{
    props.addMess()
  };
  let updateNewMess = () => {
    let datas = newRef.current.value;
    props.updateNewMess(datas)
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
            className='Messinput' ref={newRef} value={props.Newmess}/>
            <button className='Messbtn' onClick={addMess}>✉️</button>
          </form>
        </div>
        </div>
        
    </section>
  )
}
export default Dialogs