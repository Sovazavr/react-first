import { rerenderEntireTree } from '../render'


let state = {
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
}
export let addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export default state