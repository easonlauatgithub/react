import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import TodoList from './component/TodoList';
import Content from './component/Content';
import List from './component/List';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import { Switch, Route, Link, BrowserRouter, HashRouter } from 'react-router-dom';

const Main = ()=>{
    return (
        <div>
            <Content />
            <TodoList />

            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/todolist">待辦事項</Link></li>
            </ul>
            <Switch>
                <Route exact path="/a" component={Content} />
                <Route path="/todolist" component={TodoList} />
                <Route path="/list/:taskName" component={List} />
            </Switch>
        </div>
    );
}

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <Main />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
