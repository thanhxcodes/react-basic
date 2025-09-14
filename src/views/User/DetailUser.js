import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            this.setState({
                user: res && res.data ? res.data : {}
            })
            console.log(res);
        }
    }

    HandleBackBtn = (event) => {
        event.preventDefault();
        this.props.history.push('/users');
    }

    render() {
        let { user } = this.state;
        let isEmptyObject = Object.keys(user).length === 0;
        return (
            <>
                <div>Detail User with id = {user.id}</div>
                {
                    isEmptyObject === false &&
                    <>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                        <p>{user.address.street}</p>
                    </>
                }
                <div>
                    <button type="submit" onClick={(event) => this.HandleBackBtn(event)}>Back</button>
                </div>
            </>
        )
    }
}

export default withRouter(DetailUser);
