import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
            <i className="fas fa-code"></i> 
            Training Log
        </Link>
      </h1>
      <ul>
        <li><Button color = "default"
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
    </nav>
    )
}

export default Navbar;
