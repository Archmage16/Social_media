let store = {
    _state : {
        profilePage: {
            posts : [
                {name: "Andrew", id: 1, message: 'Hi, how are you?', likesCount: 0, image: 'https://avatarfiles.alphacoders.com/365/thumb-350-365293.webp' },
                {name: "Maksim", id: 2, message: 'It\'s my first post', likesCount: 0, image: 'Ita.jpeg' },
                {name: "Velara", id: 3, message: 'Cute!!!', likesCount: 0, image: 'https://thejujutsukaisen.com/wp-content/uploads/2024/02/yuta-with-sword.webp' },
                {name: "Varan", id: 4, message: 'Wonderful!', likesCount: 0, image: 'Maki.jpeg' }
            ],
            newPostText: 'Hi'
        }, 
        messagePage: {
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
    },
    getState(){
        return this._state
    },
    
    rerenderTree () {},

    dispatch(action){
        if(action.type === 'ADD-POST'){
            const NewPost = {
                id : 5,
                name: "Oleg",
                image: 'Ita.jpeg',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(NewPost)
            this._state.profilePage.newPostText = ''
            this._rerenderTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._rerenderTree(this._state)
        }
        if(action.type === "ADD-MESSAGE"){
            const NewMess = {
                id: 4, 
                messages: this._state.messagePage.Newmess
            };
            this._state.messagePage.MessagesNews.push(NewMess)
            this._state.messagePage.Newmess = ''
            this._rerenderTree()
        } else if(action.type === 'UPDATE-NEW-MESSAGE'){
            this._state.messagePage.Newmess = action.New
            this._rerenderTree()
        }
    },

    sub(server){
        this._rerenderTree = server
    }    
}

export const addPostAction = () =>{
    return {type: 'ADD-POST'}
}
export const ChangesAction = (data) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText : data}
}
export const addMessAction = () =>{
    return {type: "ADD-MESSAGE"}
}
export const updateNewMessAction = (datas) =>{
    return {type: "UPDATE-NEW-MESSAGE", New: datas}
}

export default store