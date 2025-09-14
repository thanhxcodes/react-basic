import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '1000 $' },
            { id: 'abcJob2', title: 'Tester', salary: '2000 $' },
            { id: 'abcJob3', title: 'Manager', salary: '3000 $' }
        ]
    }

    addNewJob = (job) => {
        console.log("job: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (id) => {
        console.log("deleteAJob: ", id);
        let currentJobs = this.state.arrJobs.filter(job => job.id !== id);
        // currentJobs.splice(index, 1);
        console.log('current jobs: ', currentJobs);
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        // console.log('>>> call render ', this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent;