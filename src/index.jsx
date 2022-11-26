import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import TodoListPage from './components/TodoListPage.jsx';
import CurrentTask from './components/CurrentTask.jsx';
import TodoList from './components/TodoList.jsx';
import TodoListContext from './components/TodoListContext.jsx';

const Main = ()=>{
    const [todoList] = useState(['first','second']);
    return (
        <TodoListContext.Provider value={todoList}>
            <div>
                <span>Number of todoList: {todoList.length}</span>
                <TodoListPage />
                <CurrentTask />
            </div>
        </TodoListContext.Provider>

    );
}

ReactDom.render(
    <Main />,
    document.getElementById('root')
);
