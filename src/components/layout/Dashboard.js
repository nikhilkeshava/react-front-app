import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ShowBookList from "../list/ShowBookList";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        <nav className="navbar bg-light justify-space-between">
          <Link className="navbar-brand text-dark font-weight-bold" to="/">
            <i className="fa fa-code"></i> MERN Stack App
          </Link>
          <div>
            <b className="name-lable">{user.name.split(" ")[0]}</b>
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="container text-center mt-15">
          <div className="row">
            <div className="col-sm-12">
              <ShowBookList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
