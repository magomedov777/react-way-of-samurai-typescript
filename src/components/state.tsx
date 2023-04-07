export type StatePropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type DialogsType = {
    name: string
    id: number
}

export type MessagesType = {
    id: number
    message: string
}

let state: StatePropsType = {
    posts: [
        {id: 1, message: 'Good morning', likes: 17},
        {id: 2, message: 'What are your doing?', likes: 27}
        ],
      
    dialogs: [
          {id: 1, name: 'Dima'},
          {id: 2, name: 'Andrew'},
          {id: 3, name: 'Sveta'},
          {id: 4, name: 'Sasha'},
          {id: 5, name: 'Victor'},
          {id: 6, name: 'Valera'}
      ],
      
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are your doing?'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'hi'}
      ],
  };



export default state;