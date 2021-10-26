import React, {useRef, useState, useContext} from 'react';
import updateNote from "../actions/updateNote";
import Context from "../contexts/context"

export default function FormUpdateNotes(props) {
    const [alert, setAlert] = useState(false);

    const {dispatch, setIsUpdate, isUpdate, itemNote} = useContext(Context);
    const {id, result: text, checked} = itemNote; //Получения объекта обновляемой задачи
    const edited = isUpdate ? " form-notes--active" : ""; //Установка класса отображения html-элемента текстового редактора
    const alertMsg = alert ? " form-notes__text--alert" : ""; //Установка класса отображения html-элемента сообщения об ошибке
    const textNote = useRef(); //Ссылка на текстовое поле задачи
    if (textNote.current) 
        textNote.current.value = text; //Записать в текстовое поле предыдущее значение задачи
    //Обработчик обновления данных задачи
    const onUpdateNote = (e) => {
        e.preventDefault();
        let result = textNote.current.value.trim();
        e.preventDefault();
        //Проверка на наличие текстовом поле введенных данных
        if (result.length > 0) {
            setAlert(false); //Очистить отображение сообщения об ошибке
            dispatch(updateNote(result, id, checked)); //Отправить действие обновление записи задачи
            setIsUpdate(false); //Убрать модульное окно текстового редактора
        }
        else setAlert(true);  //Иначе вывести сообщение об ошибке
    }
    //Обработчик закрытия формы без сохранения данных
    const onCloseForm = (e) => {
        e.preventDefault();
        setAlert(false); //Очистить отображение сообщения об ошибке
        setIsUpdate(false); //Убрать модульное окно текстового редактора
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
