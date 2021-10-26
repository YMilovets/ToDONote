import React, {useContext} from 'react'
import Context from "../contexts/context";

export default function Header(props) {
    const {list, editMode, setEditMode} = useContext(Context);
    const onEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true);
    } //Определить отображение текста кнопки при активании и деактивации режима редактирования
    return (
        <div className="header">
            <h1 className="header__title">Сегодня</h1>
            {list.length > 0 && 
                <button onClick={onEditMode} 
                    className="edit-notes">{props.stateEditBtn}
                </button>}
        </div>
    )
}
