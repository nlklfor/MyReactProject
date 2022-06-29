const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        { id: 1, name: "Dimych", image: "https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t500x500.jpg" },
        { id: 2, name: "Nikitos", image: "https://sun9-57.userapi.com/sun9-64/s/v1/ig2/yFfB4KtXNFoS9BtJAcdie9zncTWPkXCZmEgFkY-b5LW8Q1pjThxrLDFX-BswBFyImYLr4cov9ce1jes-y-NRI8h1.jpg?size=200x200&quality=96&crop=283,475,1018,1018&ava=1" },
        { id: 3, name: "Iluha", image: "https://i1.sndcdn.com/avatars-lcLvzmx5Q3PBCQje-u37Ojw-t500x500.jpg" },
        { id: 4, name: "Atnoha", image: "https://sun9-42.userapi.com/sun9-12/impg/hQLu1FFjulje9mUD5VBmjqAt0YCQGOuziKoLTw/_AHDH4Ob5Cw.jpg?size=604x604&quality=96&sign=42f944745be2f98d2daaac59dcb651cc&type=album" },
        { id: 5, name: "Kiruha", image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIjFz_OlZbqJxD4C68cp2u-Z9Ijw0AXmrUZoZm2iLI-cc1M7MAmC_FntwvCv28EpZvYmDw" },
        { id: 6, name: "Egorishe", image: "https://stickerly.pstatic.net/sticker_pack/V3UsPH6pEtk8qTcLjMqdQ/F4MF00/33/0a5a27ca-3840-4383-8431-918ae45ff2ef.png" }
    ],
    messagesData: [
        { id: 1, message: "Ky" },
        { id: 2, message: "Che nado?" },
        { id: 3, message: "Ta niche" },
        { id: 4, message: "Pon😐😐😐" }
    ],
    newMessageText: "",
}


const dialogReducer = (state = initialState, action) => {

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