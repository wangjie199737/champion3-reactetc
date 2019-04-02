// import React, { Component } from 'react';
// import store from './store';//默认会找文件夹中的index文件
// import {add_todo} from './actions/index';
// // import {connect} from 'react-redux';
// export default class TodoList extends Component {
//     constructor() {
//         super();
//         console.log(store.getState());
//         this.state = {
//             list:store.getState().list
//         }
//         store.subscribe(() => {
//             this.setState({
//                 list:store.getState().list
//             })
//         });
//     }
//     handleAdd = (e) => {
//         if(e.keyCode === 13){
//             this.props.dispatch(add_todo(e.target.value));
//         }
//     }
//     render() {
//         let list = this.props;
//         return (
//             <div>
//                 <input type="text" onKeyDown={this.handleAdd}/><br />
//                 <ul>
//                     {
//                         list.map((item, index) => (
//                             <li key={index} onClick={()=>{this.handleDec(index)}}>{item}</li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
    
// }
// let napStateProps = (state)=>{
//     return {
//         list:state.list
//     }
// }
// export default connect(mapStateToProps)(TodoList);
// 以上是老师上课讲的



import React, { Component } from 'react';
import store from './store';//默认会找文件夹中的index文件
export default class ToDoList extends Component {
    constructor() {
        super();
        console.log(store.getState().todo);
        this.state = {
            list:store.getState().todo.list
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().todo.list
            })
        });
    }
    handleAdd = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        if(event.keyCode === 13) {
            let action = {type: 'add_item', value: event.target.value};
            store.dispatch(action);
            event.target.value = '';
        }
    }
    handleDec = (idx) => {
        console.log(idx);
        let action = {type: 'dec_item', value: idx};
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd} /><br />
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index} onClick={() => {this.handleDec(index)}}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
