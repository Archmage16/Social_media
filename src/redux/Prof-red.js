let initProf = {
    posts : [
        {name: "Andrew", id: 1, message: 'Hi, how are you?', likesCount: 0, image: 'https://avatarfiles.alphacoders.com/365/thumb-350-365293.webp' },
        {name: "Maksim", id: 2, message: 'It\'s my first post', likesCount: 0, image: 'Ita.jpeg' },
        {name: "Velara", id: 3, message: 'Cute!!!', likesCount: 0, image: 'https://thejujutsukaisen.com/wp-content/uploads/2024/02/yuta-with-sword.webp' },
        {name: "Varan", id: 4, message: 'Wonderful!', likesCount: 0, image: 'Maki.jpeg' }
    ],
    newPostText: 'Hi'
}

const Profile_reducer = (state = initProf, action) => {
    if(action.type === 'ADD-POST'){
        let NewPost = {
            id : 5,
            name: "Oleg",
            image: 'Ita.jpeg',
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(NewPost)
        state.newPostText = ''
        // this._rerenderTree(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        state.newPostText = action.newText
        // this._rerenderTree(this._state)
    }
    return state
}
export const addPostAction = () =>{
    return {type: 'ADD-POST'}
}
export const ChangesAction = (data) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText : data}
}
export default Profile_reducer