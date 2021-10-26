import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import "./App.css";
import FormAddNodes from "./components/formAddNotes";
import ListToDoNotes from "./components/listToDoNotes"
import ListToEditNotes from "./components/listToEditNotes"
import Header from "./components/header"
import Context from "./contexts/context"

function App() {
  const dispatch = useDispatch(); 
  //Выборка свойств из состояния хранилища state
  //listNotes - массив хранения объектов задач todo со свойствами {id, result, checked}
  const {listNotes: list, id: idPos} = useSelector(state => state.addNoteReducer);
  const [isEditor, setIsEditor] = useState(false);  //состояние запуска текстового редактора
  const [editMode, setEditMode] = useState(false);  //режим состояния редактирования
  useEffect(() => {  
    return () => {    
      dispatch({type: "SAVE_DATA_STATE"})
    }
  })
  //Обработчик события запуска формы текстового редактора
  const onAddForm = () => {
    setIsEditor(true);
  }
  //Состояние кнопки активации режима редактирования
  const stateEditBtn = editMode ? "Отменить" : "Править";
  return (
    <Context.Provider value={{list, dispatch, isEditor, setIsEditor, idPos, setEditMode, editMode}}>
      <div className="app">
        <Header {...{stateEditBtn}} />
        {list.length ? 
          (editMode ? <ListToEditNotes /> : 
            <ListToDoNotes />) : 
          <p className="msg-alert">Список задач пуст</p>}
        {!editMode && <button onClick={onAddForm} className="add-note"></button>}
        
        <FormAddNodes />
      </div>
    </Context.Provider>
  );
}
export default App;