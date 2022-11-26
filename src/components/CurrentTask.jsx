import React, { useEffect, useState, useContext } from 'react';
import TodoListContext from './TodoListContext.jsx';

const CurrentTask = ()=>{
    const todoList = useContext(TodoListContext);
    // const {todoList} = props;
    return <div>CurrentTask: {todoList[0]}</div>;
}

export default CurrentTask;