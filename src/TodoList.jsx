import React from 'react';

const TodoList = (props) => {
    
    // const removeItem = () => {
    //     console.log("Deleted");
    // }

    return(
    <> 
    <div className="todo_style">
    <button className="cross"
    onClick={()=>{
        props.onSelect(props.id)
    }}
    >-</button>
    <li>{props.text}</li>
    </div>
    </>);
}

export default TodoList;