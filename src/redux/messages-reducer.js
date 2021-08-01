
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
    ]
}

export const messagesReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }


        }
        default:
            return state
    }


}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

