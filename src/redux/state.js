let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hi, how a you', likesCount: 20 },
        { id: 2, post: 'It\'s my first post', likesCount: 12 }
      ],
      newPostText: 'Add you post'
    },
    messagesPage: {
      dialogs: [
        { id: '1', name: 'Dmitry' },
        { id: '2', name: 'Andrew' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Vadim' },
        { id: '5', name: 'Alexander' },
        { id: '6', name: 'Mike' }
      ],
      messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How are you' },
        { id: '3', message: 'WAZZZAAARRR' }
      ]
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() { },
  addPost() {
    let newPost = {
      id: 5,
      post: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}




export default store