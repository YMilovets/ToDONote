import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import "./App.css";
import FormAddNodes from "./components/formAddNotes";
import ListToDoNotes from "./components/listToDoNotes"
import ListToEditNotes from "./components/listToEditNotes"
import Header from "./components/header"
function App() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.addNoteReducer.listNotes);
  const idPos = useSelector(state => state.addNoteReducer.id);
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [id, setID] = useState(0);
  const [itemNote, setItemNote] = useState({});

  const onAddForm = () => {
    setIsEdit(true);
  }
  const onEditMode = () => {
    editMode ? setEditMode(false) : setEditMode(true);
  }
  const stateEditBtn = editMode ? "Отменить" : "Править";

  return (
    <div className="app">
      <Header {...{list, onEditMode, stateEditBtn}} />
      {list.length ? 
        (editMode ? <ListToEditNotes {...{isUpdate, id, list, dispatch, itemNote, setItemNote, setEditMode, setIsUpdate, setID}}/> : 
          <ListToDoNotes {...{list, dispatch}} />) : 
        <p className="msg-alert">Список задач пуст</p>}
      {!editMode ? <button onClick={onAddForm} className="add-note"></button> : ""}
      
      <FormAddNodes {...{isEdit, dispatch, list, setIsEdit, idPos}}/>
    </div>
  );
}

export default App;