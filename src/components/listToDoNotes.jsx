import React, {useContext} from 'react'
import checkToDoNote from "../actions/checkToDoNote"
import Context from "../contexts/context"
//Компонент отображения списка задач с возможностью делать пометку об выполнении
export default function ListToDoNotes(props) {
    const {dispatch, list} = useContext(Context);
    const onChecked = (e, elem) => {
        if (e.target.classList.contains("list-to-do__check")) {
            const id = elem.id;
            const checked = !elem.checked;
            dispatch(checkToDoNote(id, checked)); //Отправить действие изменения состояния об выполнении задачи
        }
    }
    
    return (
        <ul className="list-to-do">
            {list.map(
                (elem, i) => 
                (<li onClick={(e) => {onChecked(e, elem)}} 
                    className="list-to-do__elem" key={i}>
                    <label className="list-to-do__label">
                        <input className="list-to-do__check" 
                            type="checkbox" 
                            defaultChecked={elem.checked} />
                        <div className="list-to-do__text-wrap">
                            <div className="list-to-do__checkbox"></div>
                            <span className="list-to-do__text">{elem.result}</span>
                        </div>
                    </label>
                </li>)
            )}
        </ul>
    )
}
