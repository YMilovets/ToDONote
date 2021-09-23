export default function updateNote(result, id, checked) {
    return {
        type: "UPDATE_NOTE", payload: {result, id, checked}
    }
}