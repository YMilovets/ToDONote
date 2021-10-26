import React, {useRef, useState, useContext} from 'react'
import setNote from "../actions/setNote"
import setNewID from "../actions/setNewID"
import Context from "../contexts/context"

export default function FormAddNotes(props) {
    const [alert, setAlert] = useState(false); //состояние отображения сообщения об ошибке
    //idPos - приращение уникального ключа id
    const {dispatch, isEditor, setIsEditor, idPos: id} = useContext(Context);
    const edited = isEditor ? " form-notes--active" : ""; //Установка класса отображения html-элемента текстового редактора
    const alertMsg = alert ? " form-notes__text--alert" : ""; //Установка класса отображения html-элемента сообщения об ошибке
    const textNote = useRef(); //Ссылка на текстовое поле задачи
    //Обработчик добавления новой задачи
    const onAddNote = (e) => {
        const result = textNote.current.value.trim();
        const checked = false; //Устанавливаем атрибут задачи на "Не выполнено"
        e.preventDefault();
        //Проверка на наличие текстовом поле введенных данных
        if (result.length > 0) {
            setAlert(false); //Очистить отображение сообщения об ошибке
            dispatch(setNote(result, id, checked)); //Отправить действие записи новой задачи
            dispatch(setNewID()); //Увеличить приращение ключа id на 1
            setIsEditor(false); //Убрать модульное окно текстового редактора
            textNote.current.value = ""; //Очистить текстовое поле
        }
        else setAlert(true); //Иначе вывести сообщение об ошибке
    }
    //Обработчик закрытия формы без сохранения данных
    const onCloseForm = (e) => {
        e.preventDefault();
        setIsEditor(false); //Убрать модульное окно текстового редактора
        setAlert(false); //Очистить отображение сообщения об ошибке
        textNote.current.value = ""; //Очистить текстовое поле
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