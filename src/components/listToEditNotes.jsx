import FormUpdateNotes from "../components/formUpdateNotes"
import deleteNote from "../actions/deleteNote"

export default function ListToEditNotes(props) {
    const onRemoveNote = (id) => {
        props.dispatch(deleteNote(id))
        if (!(props.list.length - 1)) props.setEditMode(false)
    }
    const onEditNote = (idParam) => {
        props.setIsUpdate(true);
        props.setID(idParam);
        props.setItemNote( props.list.find(elem => elem.id === idParam) );
    }
    return (
        <>
            <ul className="list-to-do">
                {props.list.map(
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
            <FormUpdateNotes {...props} item={props.itemNote.result}/>
        </>  
    )
}