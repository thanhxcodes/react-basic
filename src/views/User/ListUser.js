import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>>> check response: ', res.data.page);
        //     })
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
            listUsers: res && res.data ? res.data : []
        })
        console.log('>>> check response: ', res.data);
    }

    HandleViewUserDetail = (user) => {
        console.log('>> props list user: ', this.props);
        // setTimeout(() => {
        //     this.props.history.push(`/user/${user.id}`)
        // }, 100)
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        console.log(listUsers);
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((userObj, index) => {
                            return (
                                <div className="child" key={userObj.id} onClick={() => this.HandleViewUserDetail(userObj)}>
                                    <p>{index + 1} - {userObj.username}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);