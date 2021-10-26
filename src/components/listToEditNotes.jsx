import FormUpdateNotes from "../components/formUpdateNotes"
import deleteNote from "../actions/deleteNote"
import Context from "../contexts/context";
import {useContext, useState} from "react";

export default function ListToEditNotes(props) {
    const {dispatch, list, setEditMode} = useContext(Context);
    //Состояния. которые будут определены в компоненте и отправлены в форму обновления
    const [isUpdate, setIsUpdate] = useState(false);
    const [itemNote, setItemNote] = useState({});
    const onRemoveNote = (id) => {
        dispatch(deleteNote(id)); //Отправить действие удаление задачи по id
        if (!(list.length - 1)) setEditMode(false); //При удалении всех задач отключить режим редактирования
    }
    const onEditNote = (idParam) => {
        setIsUpdate(true); //Активировать модульное окно текстового редактора
        setItemNote( list.find(elem => elem.id === idParam) ); //Найти объект задачи по id и записать в itemNote
    }
    return (
        <Context.Provider value={{dispatch, setIsUpdate, isUpdate, itemNote}}>
            <ul className="list-to-do">
                {list.map(
                    (elem, i) => 
                    (<li className="list-to-do__elem" key={i}>
                        <label className="list-to-do__label">
                            <input className="list-to-do__check" 
                                type="checkbox" 
                                defaultChecked={elem.checked} 
                                disabled />
                            <div className="list-to-do__text-wrap">
                                <div onClick={() => onRemoveNote(elem.id)} 
                                    className="list-to-do__remove"></div>
                                <span onClick={() => onEditNote(elem.id)} 
                                    className="list-to-do__text">{elem.result}</span>
                            </div>
                        </label>
                    </li>)
                )}
            </ul>
            <FormUpdateNotes />
        </Context.Provider>  
    )
}