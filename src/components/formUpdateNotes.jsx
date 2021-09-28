import React, {useRef, useState} from 'react'
import updateNote from "../actions/updateNote"

export default function FormUpdateNotes(props) {
    const [alert, setAlert] = useState(false);
    const edited = props.isUpdate ? " form-notes--active" : "";
    const alertMsg = alert ? " form-notes__text--alert" : "";
    const textNote = useRef();
    if (textNote.current) textNote.current.value = props.item;
    const onUpdateNote = (e) => {
        let result = textNote.current.value.trim();
        const id = props.id;
        const checked = props.itemNote.checked;
        e.preventDefault();
        if (result.length > 0) {
            setAlert(false);
            props.dispatch(updateNote(result, id, checked));
            props.setIsUpdate(false);
        }
        else setAlert(true);
    }
    const onCloseForm = (e) => {
        e.preventDefault();
        setAlert(false);
        props.setIsUpdate(false);
    }
    const onChangeNote = () => {
        setAlert(false);
    }
    return (
        <div className={`form-notes ${edited}`}>
            <form className="form-notes-wrap">
                {alert ? <p className="msg-alert">Заполните поле для обновления текста задачи</p> : ""}
                <textarea onChange={onChangeNote} 
                            type="text" ref={textNote} 
                            className={`form-notes__text ${alertMsg}`}
                            defaultValue={props.item}>
                </textarea>
                <div className="form-notes-manage">
                    <button onClick={onCloseForm} 
                            className="form-notes__btn form-notes__btn--close">Закрыть</button>
                    <button onClick={onUpdateNote} 
                            className="form-notes__btn form-notes__btn--add" 
                            type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
}
