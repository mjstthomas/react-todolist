import React from "react"
import image from './images/trash.png'

function TodoItem(props){
	const myStyle = {
		fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through" 
	}

	    return (
	        <div className="todo-item">
	            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
	            <p style={props.item.completed ? myStyle : null}>{props.item.text}</p>
	            <button className= "remove" onClick={() => props.handleClick(props.item.id)}><img src={image} /></button>
	        </div>
	    )
	
}

export default TodoItem