import React, { Component } from "react";
import axios from "axios";
import s from "./UserList.module.css";

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://serverless-backend-ky9b8rmuq.now.sh/api/users"
    );
    this.setState({ users: response.data });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>User list</h1>
        <ul className={s.list}>
          {this.state.users.map((user) => {
            return (
              <li key={user._id}>{`${user.name.first} ${user.name.last}`}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
