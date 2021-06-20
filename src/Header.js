import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <header className="jumbotron text-center">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/Profile">Profile</Link>
          {
            isAuthenticated ? <Link to="/Logout">Logout</Link> : <Link to="/Login">Login</Link>
          }

        </Navbar>
      </header>

    )
  }
}

export default withAuth0(Header);
