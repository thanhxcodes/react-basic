import React from 'react';
import AddNewTodo from './AddNewTodo';
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Washing' },
            { id: 'todo3', title: 'Learning' }
        ]
    }

    addNewTodo = (todo) => {

        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add success!");
    }

    handleDelete = (item) => {
        let currentTodos = this.state.listTodos;
        let result = currentTodos.filter(todo => {
            return todo.id !== item.id
        })
        this.setState({
            listTodos: result
        })
        toast.success("Delete success!");
    }

    render() {
        let { listTodos } = this.state;
        return (
            <div className='list-todo-container'>
                <div>List To Do</div>
                <AddNewTodo addNewTodo={this.addNewTodo} />
                <div className='list-todo-content'>
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map(item =>
                            <div className='todo-item' key={item.id}>
                                <span>{item.title}</span>
                                <button>Edit</button>
                                <button onClick={() => this.handleDelete(item)}>Delete</button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;