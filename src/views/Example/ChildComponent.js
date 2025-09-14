import React from 'react';
import './Demo.scss'


class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    HandleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    HandleOnclickDelete = (id) => {
        this.props.deleteAJob(id);
    }

    render() {

        const { showJobs } = this.state;

        console.log('>>>> showJobs: ', showJobs);

        // const check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        // console.log(check);

        // console.log('>>>> props: ', this.props);
        const { arrJobs } = this.props;

        // const arrJobFilter = arrJobs.filter(job => Number.parseInt(job.salary) >= 3000);

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show' onClick={() => this.HandleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                arrJobs.map((job, index) => {
                                    return (
                                        <>
                                            <div key={job.id}>{index} - {job.title} - {job.salary} <span onClick={() => this.HandleOnclickDelete(job.id)}>X</span></div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.HandleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}


export default ChildComponent;