import React from "react";
import { toast } from 'react-toastify';

class AddNewTodo extends React.Component {

    state = {
        content: ''
    }

    HandleOnchange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    HandleAddNewTodo = () => {
        if (!this.state.content) {
            //undefined, null, empty
            toast.error('Missing required params!')
            return;
        }
        this.props.addNewTodo(
            {
                id: 'todo' + Math.floor(Math.random() * 1001),
                title: this.state.content
            }
        )

        this.setState({
            content: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type='text' value={title} onChange={(event) => this.HandleOnchange(event)} />
                <button className="add" type="button" onClick={() => this.HandleAddNewTodo()}>Add</button>
            </div>
        )
    }
}

export default AddNewTodo;