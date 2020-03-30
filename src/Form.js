import React from "react"

class Form extends React.Component{
	state = {
		value: '',
	}


	handleChange = event => {
		this.setState({
			value: event.target.value
		})
	}
	handleSubmit = event => {
		event.preventDefault()
		this.props.handleSubmit(this.state.value)
		this.setState({value: ''})
	}

	render(props){
	    return (
	        <form className="inputForm" name= "form" onSubmit={this.handleSubmit}>
	            <input type="text" className= "inputValue" placeholder="New ToDo" value = {this.state.value} onChange={this.handleChange} required/>
	            <button type="submit" className="add">+</button>
	        </form>
	    )
	}
}

export default Form
