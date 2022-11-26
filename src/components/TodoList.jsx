import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

const TodoList = (props)=>{
    const {todoList} = props;
    // const [todoList] = useState(['first','second']);
    return todoList.map(task=>(
        <ul key={task}>
            <Task  task={task} />
        </ul>
    ));
}

export default TodoList;