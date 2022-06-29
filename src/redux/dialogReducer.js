const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";


const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let addNewMessage = {
                id: 10,
                message: state.newMessageText,
            }
            state.messagesData.push(addNewMessage);
            // state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default: return state;
    }
}

export const addMesssageActionCreator = () => {
    return {
        type: ADD_MESSAGE,

    }

}
export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessage: message,

    }

}
export default dialogReducer;