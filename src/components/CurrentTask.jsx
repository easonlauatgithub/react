import React, { useEffect, useState, useContext } from 'react';
import TodoListContext from './TodoListContext.jsx';
import {Provider, useSelector} from 'react-redux';

const CurrentTask = ()=>{
    const todoList = useSelector(state => state.todoList);
    // const todoList = useContext(TodoListContext);
    // const {todoList} = props;
    return <div>CurrentTask: {todoList[0]}</div>;
}

export default CurrentTask;