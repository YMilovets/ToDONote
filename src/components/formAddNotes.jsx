import React, {useRef, useState} from 'react'
import setNote from "../actions/setNote"
import setNewID from "../actions/setNewID"

export default function FormAddNotes(props) {
    const [alert, setAlert] = useState(false)
    const edited = props.isEdit ? " form-notes--active" : "";
    const alertMsg = alert ? " form-notes__text--alert" : "";
    const textNote = useRef()
    const onAddNote = (e) => {
        const result = textNote.current.value.trim();
        const id = props.idPos;
        const checked = false;
        e.preventDefault();

        if (result.length > 0) {
            setAlert(false);
            props.dispatch(setNote(result, id, checked));
            props.dispatch(setNewID());
            props.setIsEdit(false);
            textNote.current.value = "";
        }
        else setAlert(true);
    }
    const onCloseForm = (e) => {
        e.preventDefault();
        props.setIsEdit(false);
        setAlert(false);
        textNote.current.value = "";
    }
    const onChangeNote = () => {
        setAlert(false);
    }
    return (
        <div className={`form-notes ${edited}`}>
            <form className="form-notes-wrap">
                {alert ? <p className="msg-alert">Заполните поле для ввода новой задачи</p> : ""}
                <textarea onChange={onChangeNote} 
                            ref={textNote} 
                            className={`form-notes__text ${alertMsg}`} 
                            placeholder="Введите текст задачи"></textarea>
                <div className="form-notes-manage">
                    <button onClick={onCloseForm} 
                            className="form-notes__btn form-notes__btn--close">Закрыть</button>
                    <button onClick={onAddNote} 
                            className="form-notes__btn form-notes__btn--add" type="submit">Добавить</button>
                </div>
            </form>
        </div>
    );
}