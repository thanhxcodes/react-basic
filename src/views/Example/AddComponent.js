import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    HandleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    HandleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }


    HandleSubmitForm = (event) => {
        event.preventDefault();
        console.log('>>>> ', this.state)

        if (!this.state.title || !this.state.salary) {
            alert('missing required parameters');
            return;
        }

        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 1001),
                title: this.state.title,
                salary: this.state.salary
            }
        );
        this.setState({
            title: '',
            salary: ''
        })
    }



    render() {

        return (
            <form>
                <label htmlFor="fname">Title Job:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.HandleChangeTitleJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.HandleChangeSalary(event)} /><br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.HandleSubmitForm(event)}
                />
            </form>
        )
    }
}

export default AddComponent;