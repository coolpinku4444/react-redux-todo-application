import {Add_Todo,Toggle_Todo,Delete_Todo} from './actiontype';
            

export const addTodo = (task) => {
    return {
        type:Add_Todo,
        task:task
    }

}

export  const toggleTodo = (index) => {
    return {
        type:Toggle_Todo,
        index:index
    }
} 

export const deleteTodo = (index) => {
    return {
        type:Delete_Todo,
        index : index
    }
}
    