import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { UserCard } from "../../components";
import { getUsers } from "../../actions";
import "./styles.css";

class Users extends Component {
  componentDidMount = async () => {
    this.props.getUsers();
  };

  render() {
    return (
      <div className="page page-users">
        <h1>USERS</h1>
        {this.props.users.map((user) => {
          return (
            <Link to={`/users/${user.index}`} key={user._id}>
              <UserCard picture={user.picture} name={user.name} />
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    errors: state.users.errors,
  };
};

const actions = {
  getUsers,
};

export default connect(mapStateToProps, actions)(Users);
