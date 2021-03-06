const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "NePon😐", image: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' }
    ],
    newPostText: "",
}


const profileReducer = (state = initialState, action) => {

    let copyState = { ...state };
    copyState.postsData = [...state.postsData];

    switch (action.type) {
        case ADD_POST:
            let addNewPost = {
                id: 2,
                message: state.newPostText,
                image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
            }
            copyState.postsData.push(addNewPost);
            copyState.newPostText = '';
            return copyState;


        case UPDATE_POST_TEXT:
            copyState.newPostText = action.newText;
            return copyState;


        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text,

    }
}

export default profileReducer;