import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Button color = "default"
                        startIcon={<FitnessCenterIcon />} 
                        size="small">
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </Button>
            </li>
            <li>
                <Button color = "default"
                        startIcon={<FitnessCenterIcon />} 
                        size="small">
                    <Link to="/exercises">
                        Exercises
                    </Link>
                </Button>
            </li>
            <li>
                <Button color = "default"
                        startIcon={<ExitToAppIcon />} 
                        size="small">
                    <a onClick={logout} href="#!">
                        Logout
                    </a>
                </Button>
            </li>
        </ul>

    );

    const guestLinks = (
        <ul>
            <li>
                <Button color = "default"
                        startIcon={<FitnessCenterIcon />} 
                        size="small">
                    <a href="profiles.html">
                        Exercises
                    </a>
                </Button>
            </li>
            <li>
                <Button color = "default"
                        startIcon={<VpnKeyIcon />} 
                        size="small">
                    <Link to="/login">
                        Login
                    </Link>
                </Button>
            </li>
        </ul>

    );

    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
            <i className="fas fa-code"></i> 
            Training Log
        </Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks } </Fragment>) }
      
    </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
