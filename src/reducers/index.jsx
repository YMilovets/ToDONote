import {combineReducers} from "redux";
import addNoteReducer from "./setNote"
const reducer = combineReducers({addNoteReducer});
export default reducer;