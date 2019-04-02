import React, { Component } from 'react';
import Comment from './Comment';
import DateSource from '../ds/DateSource';
export default class CommentList extends Component {
    constructor(){
        super();
        this.state = {
            comments:DateSource.getComments()
        }
    }
    componentDidMount() {
        DateSource.addChangeListener(this.handleChange);
    }
    handleChange = ()=>{
        this.setState({
            comments:DateSource.getComments()
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.comments.map((item,index)=>(
                        <Comment comment={item} key={index}/>
                    ))
                }
                
            </ul>
        )
    }
}
