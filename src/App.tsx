import React from 'react';
import './assets/style/index.scss'
import TodoList from "./pages/todo-list";
import AddTodo from "./pages/add-todo";

function App() {
    return (
        <div className="App G-container">
                <AddTodo/>
                <TodoList/>
        </div>
    );
}

export default App;
