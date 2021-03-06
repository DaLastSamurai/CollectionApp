// This navbar will show up when the user is logged in.
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import firebase from 'firebase';
import { SearchHits } from '../helperElements/Search.jsx';
import UserInfo from '../userBar/UserInfo.jsx';

export default class ProtectedNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.signOutUser = async () => {
      try {
        await firebase.auth().signOut();
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    };
  }

  render() {
    return (
      <nav className="protectednavbar-container">
        <div className="logo-navbar">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-search-container">
          <div>
            <Link to="/searching">
              <SearchHits />
            </Link>
            {/* <SearchToggler searchBy={this.props.searchBy} /> */}
          </div>
        </div>

        <div role="navigation" className="nav" className="navbar-links">
          <ul className="nav-items">
            <li className="nav-item dropdown">
              <Link to="/manageinventory">
                <a className="nav-link" title="library">
                  library
                </a>
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              // onClick={() => {
              //   window.location.reload();
              // }}
            >
              <Link to="/addItems">
                <a className="nav-link" title="add">
                  add
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/trade">
                <a className="nav-link" title="trade">
                  trade
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/">
                <a className="nav-link" title="Logout" onClick={this.signOutUser}>
                  logout
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="profoile-nav">
          <Link to={`/profile/${this.props.user.uid}`}>
            <div
              onClick={() => {
                window.location.reload();
              }}
            >
              <UserInfo user={this.props.user} title="Profile" />
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}
