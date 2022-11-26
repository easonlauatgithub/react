import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import TodoListPage from './components/TodoListPage.jsx';
import CurrentTask from './components/CurrentTask.jsx';
import TodoList from './components/TodoList.jsx';

const Main = ()=>{
    const [todoList] = useState(['first','second']);
    return (
        <div>
            <span>Number of todoList: {todoList.length}</span>
            // TodoListPage do not need todoList, only pass it to TodoList
            <TodoListPage todoList={todoList}/>
            <CurrentTask todoList={todoList}/>
        </div>
    );
}

ReactDom.render(
    <Main />,
    document.getElementById('root')
);
