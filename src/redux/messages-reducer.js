const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: '1', name: 'Dmitry' },
        { id: '2', name: 'Andrew' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Vadim' },
        { id: '5', name: 'Alexander' },
        { id: '6', name: 'Mike' }
    ],
    messages: [
        { id: '1', message: 'Ало' },
        { id: '2', message: 'Ты куда звонишь сынок' },
        { id: '3', message: 'Я ща приду к тебе похаваю' }
    ],
    newMessageBody: ""
}

export const messagesReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state
        //messages: [...state.messages]//крайний мессадж затерает тот, который был в стэйт
    }


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {

            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE: {

            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({ id: 6, message: body })
            return stateCopy
        }
        default:
            return state
    }


}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })