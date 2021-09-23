export default function deleteNote(id) {
    return {
        type: "DELETE_NOTE",
        payload: id
    }
}