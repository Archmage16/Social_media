// import Dialog_reducer from "./Dial-red";
// import Profile_reducer from "./Prof-red";


// let store = {
//     _state : {
//         profilePage: {
//             posts : [
//                 {name: "Andrew", id: 1, message: 'Hi, how are you?', likesCount: 0, image: 'https://avatarfiles.alphacoders.com/365/thumb-350-365293.webp' },
//                 {name: "Maksim", id: 2, message: 'It\'s my first post', likesCount: 0, image: 'Ita.jpeg' },
//                 {name: "Velara", id: 3, message: 'Cute!!!', likesCount: 0, image: 'https://thejujutsukaisen.com/wp-content/uploads/2024/02/yuta-with-sword.webp' },
//                 {name: "Varan", id: 4, message: 'Wonderful!', likesCount: 0, image: 'Maki.jpeg' }
//             ],
//             newPostText: 'Hi'
//         }, 
//         messagePage: {
//             dialogs : [
//                 {name: "Andrew",id: 1},
//                 {name: "Maksim",id: 2},
//                 {name: "Velara",id: 3},
//                 {name: "Oleg",id: 4},
//                 {name: "Varan",id: 5}
//             ],
//             messages: [
//                 {message: 'Hello', id: 1},
//                 {message: 'How are you??', id: 2},
//                 {message: 'YEAP!!', id: 3}
//             ],
//             MessagesNews: [
//                 {messages: "HI. I'm well", id: 1}
//             ],
//             Newmess: "What about you? "
//         }
//     },

//     getState(){
//         return this._state
//     },
    
//     rerenderTree () {},

//     dispatch(action){
//         this._state.profilePage = Profile_reducer(this._state.profilePage, action)
//         this._state.messagePage = Dialog_reducer(this._state.messagePage, action)
//         this._rerenderTree(this._state)
//     },
//     subscribe(server){
//         this._rerenderTree = server
//     },
// }



// export default store