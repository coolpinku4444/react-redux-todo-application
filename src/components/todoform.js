import React,{Component} from 'react'
import {connect} from 'react-redux';
import  {addTodo} from '../redux/action/actioncreator'
import { Button } from 'react-bootstrap';
import { InputWrapper,IWrapper } from './styledComponents/styledComponents'

class TodoForm extends Component {
    constructor() {
        super();
        this.taskNameHandler = this.taskNameHandler.bind(this);
        this.state = {
            taskName : ''
        }
    }
    taskNameHandler(e) {
        this.setState({
            taskName:e.target.value
        })
    }
    render() {
        return (
            <InputWrapper>
                <IWrapper type="text" onChange= {this.taskNameHandler} ></IWrapper> 
                <Button bsSize="small" bsStyle="success" onClick={() =>{ this.props.submitTaskName(this.state.taskName) } }>Add</Button>
            </InputWrapper>
        )
    }
}
const   mapsDispatchToProps = (dispatch) => {
    return {
        submitTaskName:(value) => {dispatch(addTodo(value))}
    }
    
}

export default connect(null,mapsDispatchToProps)(TodoForm);