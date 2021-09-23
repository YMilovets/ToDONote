export default function setNote(result, id, checked) {
    return {
        type: "SET_NOTE", payload: {result, id, checked}
    }
}