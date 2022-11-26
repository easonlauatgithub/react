import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TodoListContext from './TodoListContext.jsx';

const Task = (props) => {
    const {task} = props;   
    return (
        <div>{task}</div>
    );
};

Task.propTypes = {
    task: PropTypes.string,
}
Task.defaultProps = {
    task: 'Default Props',
}

const TodoList = ()=>{
    const todoList = useContext(TodoListContext);
    // const {todoList} = props;
    return todoList.map(task=>(
        <ul key={task}>
            <Task  task={task} />
        </ul>
    ));
}

export default TodoList;