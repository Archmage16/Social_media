let initDial = {
    dialogs : [
        {name: "Andrew",id: 1},
        {name: "Maksim",id: 2},
        {name: "Velara",id: 3},
        {name: "Oleg",id: 4},
        {name: "Varan",id: 5}
    ],
    messages: [
        {message: 'Hello', id: 1},
        {message: 'How are you??', id: 2},
        {message: 'YEAP!!', id: 3}
    ],
    MessagesNews: [
        {messages: "HI. I'm well", id: 1}
    ],
    Newmess: "What about you? "
}

const Dialog_reducer = (state = initDial, action) => {
    if(action.type === "ADD-MESSAGE"){
        const NewMess = {
            id: 4, 
            messages: state.Newmess
        };
        state.MessagesNews.push(NewMess)
        state.Newmess = ''
    } else if(action.type === 'UPDATE-NEW-MESSAGE'){
        state.Newmess = action.New
    }

    return state
}

export const addMessAction = () =>{
    return {type: "ADD-MESSAGE"}
}
export const updateNewMessAction = (datas) =>{
    return {type: "UPDATE-NEW-MESSAGE", New: datas}
}

export default Dialog_reducer