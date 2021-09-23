export default function checkToDoNote(id, checked) {
    return {type: "CHECK_TODO_NOTE", payload: { id, checked }}
}

