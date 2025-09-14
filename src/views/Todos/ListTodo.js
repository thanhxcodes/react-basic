import React from 'react';
import AddNewTodo from './AddNewTodo';
import './ListTodo.scss';
import { toast } from 'react-toastify';
import Color from '../HOC/Color';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Washing' },
            { id: 'todo3', title: 'Learning' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {

        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add success!");
    }

    handleEdit = (item) => {
        console.log(item);
        this.setState({
            // editTodo: {
            //     id: item.id,
            //     title: item.title
            // }
            editTodo: item
        })
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

    handleOnChangeEditTodo = (event) => {
        let editTodoTemp = { ...this.state.editTodo };
        editTodoTemp.title = event.target.value;
        this.setState({
            editTodo: editTodoTemp
        })
    }

    handleSave = () => {
        let { listTodos, editTodo } = this.state;
        if (!editTodo.title) {
            toast.error('Missing required params!')
            return;
        }
        // listTodos = listTodos.map(todo => {
        //     if (todo.id === editTodo.id) {
        //         return editTodo;
        //     }
        //     return todo;
        // })
        let indexObj = listTodos.findIndex(obj => obj.id === editTodo.id);
        listTodos[indexObj].title = editTodo.title;
        this.setState({
            listTodos: listTodos,
            editTodo: {}
        })
        toast.success("Update success!");
    }

    render() {
        let { listTodos, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj);
        return (
            <>
                <p>Simple Todo app with React (thanhxcode) </p>
                <div className='list-todo-container'>
                    <div>List To Do</div>
                    <AddNewTodo addNewTodo={this.addNewTodo} />
                    <div className='list-todo-content'>
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map(item => !isEmptyObj && editTodo.id === item.id ?
                                <div className='todo-item' key={item.id}>
                                    <input value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                    <button onClick={() => this.handleSave()}>Save</button>
                                    <button onClick={() => this.handleDelete(item)}>Delete</button>
                                </div>
                                :
                                <div className='todo-item' key={item.id}>
                                    <span>{item.title}</span>
                                    <button onClick={() => this.handleEdit(item)}>Edit</button>
                                    <button onClick={() => this.handleDelete(item)}>Delete</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>

        )
    }
}

// export default ListTodo;
export default Color(ListTodo);