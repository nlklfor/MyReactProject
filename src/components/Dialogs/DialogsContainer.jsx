
import "./Dialogs.css"
import { addMesssageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



// const DialogsContainer = (props) => {


//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let sendMessage = () => {
//                         store.dispatch(addMesssageActionCreator());
//                     }
//                     let changeMessageText = (message) => {
//                         let action = updateMessageTextActionCreator(message);
//                         store.dispatch(action)
//                     }
//                     return (
//                         <Dialogs OnSendMessage={sendMessage} OnChangeMessageText={changeMessageText} dialogsState={state.dialogsState} />
//                     )
//                 }
//             }

//         </StoreContext.Consumer>

//     )


// }

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMesssageActionCreator());
        },
        onChangeMessageText: (message) => {
            let action = updateMessageTextActionCreator(message);
            dispatch(action)
        }
    }
}
let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
