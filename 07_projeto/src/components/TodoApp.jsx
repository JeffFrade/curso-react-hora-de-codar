import { useState, useEffect } from "react";
import './TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Estado de texto da tarefa:
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Adicionar tarefa:
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);

            setInputValue('');
        }
    }

    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id != id));
    }

    return (
        <div className="app-container">
            <h1 className="title">Lista de Tarefas</h1>

            {/* Formulário para adicionar tarefa */}
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type="text" 
                    className="input-field"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Adicionar Tarefa"
                />
                <button type="submit" className="add-button">Adicionar</button>
            </form>

            {/* Listagem de tarefas */}
            {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                        <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>Exlucir Tarefa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
