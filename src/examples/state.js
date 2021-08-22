import './App.css';
import React, {useState} from "react";
function App() {
    const [counter, setCounter] = useState(0);
    const [objState, setObjState] = useState({
        title: 'Some title',
        date: Date.now()
    })

    return (
        <div className="App">
            <h1>Счетчик: {counter}</h1>
            <button onClick={() => setCounter(counter +1)}>Добавить</button>
            <button onClick={() => setCounter(counter -1)}>Убрать</button>
            <buttonß>Изменить название</buttonß>
        </div>
    );
}

export default App;
