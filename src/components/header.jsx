import React from 'react'

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="header__title">Сегодня</h1>
            {props.list.length > 0 && 
                <button onClick={props.onEditMode} 
                    className="edit-notes">{props.stateEditBtn}
                </button>}
        </div>
    )
}
