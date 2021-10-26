const result = JSON.parse(localStorage.getItem("listNotes"));
const defaultState = {
    listNotes: result || [],
    id: +localStorage.getItem("idPos")
}
export default function addNoteReducer (state = defaultState, action) {
    let arr;
    switch (action.type) {
        case "SET_NEW_ID":
            return {...state, id: state.id + 1}
        case "SET_NOTE":
            return {...state, listNotes: [...state.listNotes, {...action.payload}]};
        case "DELETE_NOTE":
            arr = state.listNotes.filter(elem => elem.id !== action.payload)
            return {...state, listNotes: arr};
        case "CHECK_TODO_NOTE":
            arr = state.listNotes.map(elem => {
                if (elem.id === action.payload.id)
                    elem.checked = action.payload.checked;
                return elem;
            })
            return {...state, listNotes: arr};
        case "UPDATE_NOTE":
            arr = state.listNotes.map(elem => {
                if (elem.id === action.payload.id)
                    elem.result = action.payload.result;
                return elem;
            })
            return {...state, listNotes: arr};
        case "SAVE_DATA_STATE":
            const notes = JSON.stringify(state.listNotes);
            localStorage.setItem("listNotes", notes);
            localStorage.setItem("idPos", state.id);
            return state;
        default: return state
    }
}