import React, { useEffect, useState } from 'react';
import TodoList from './TodoList.jsx';

const TodoListPage = (props)=>{
    const {todoList} = props;
    return (
        <div>
            <div>TodoListPage</div>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoListPage;