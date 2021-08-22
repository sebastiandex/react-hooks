import './App.css';
import React, {useEffect, useState} from "react";
function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x:0, y:0
    })
    useEffect(() => {
        console.log('render');
    })
    console.log('Component Render');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);
    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', event => {
            setPos({
                x: event.clientX,
                y: event.clientY
            })
        })
    }, []);
    return (
        <div className="App">
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users') }>пользователи</button>
            <button onClick={() => setType('todos') }>ToDo</button>
            <button onClick={() => setType('posts') }>Посты</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
