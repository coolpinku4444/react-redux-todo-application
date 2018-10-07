import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Wrapper,BWrapper} from './styledComponents/styledComponents'
import {toggleTodo,deleteTodo} from '../redux/action/actioncreator'
import { Button } from 'react-bootstrap'
class TodoList extends Component {

    render(){
        return (
            <ul>
                {
                    this.props.taskList.map((value,index) => {
                        return <Wrapper
                         onClick= { () => { this.props.toggleHandler(index) } }color={ value.status ? "green" : ''} key={index}>{value.name}
                         <BWrapper bsSize="xsmall" bsStyle="primary"
                             onClick = {(e)=> {e.stopPropagation();this.props.deleteHandler(index)}}>Delete
                        </BWrapper>
                         </Wrapper>
                    })
                }
            </ul>
        )
    }
}
const mapsStateToProps = (state) => {
    console.log(state);
    return {taskList:state.todo.taskList}
}
const mapsDispatchToProps = (dispatch) => {
    return {
        toggleHandler : (index) => {dispatch(toggleTodo(index))},
        deleteHandler : (index) => {dispatch(deleteTodo(index))}
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(TodoList);