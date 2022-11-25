import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';
import Counter from './components/Counter.jsx';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList.jsx';

const Main = ()=>{
    const [todoList] = useState(['first','second']);
    return (
        <div>
            <span>Number of todoList: {todoList.length}</span>
            <TodoList todoList={todoList} />
        </div>
    );
}

ReactDom.render(
    <Main />,
    document.getElementById('root')
);
