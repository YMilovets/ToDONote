import React, {useRef} from 'react'
import checkToDoNote from "../actions/checkToDoNote"

export default function ListToDoNotes(props) {
    const result = useRef();
    const onChecked = (e, elem) => {
        if (e.target.classList.contains("list-to-do__check")) {
            const id = elem.id;
            const checked = !elem.checked;
            props.dispatch(checkToDoNote(id, checked))
        }
    }
    
    return (
        <ul className="list-to-do">
            {props.list.map(
                (elem, i) => 
                (<li onClick={(e) => {onChecked(e, elem)}} 
                    className="list-to-do__elem" key={i}>
                    <label className="list-to-do__label">
                        <input ref={result} 
                            className="list-to-do__check" 
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
