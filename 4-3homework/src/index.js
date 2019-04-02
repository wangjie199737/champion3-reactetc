import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "antd/dist/antd.css";
import Counter from './Counter';
import ToDoList from './ToDoList';
import {Provider} from 'react-redux';
// import store from './store';
ReactDOM.render(
    <div style={{padding: '30px'}}>
        <Counter />
        {/* <Provider>
            <ToDoList />
        </Provider> */}
        <ToDoList />
    </div>,
    document.getElementById('root')
);

