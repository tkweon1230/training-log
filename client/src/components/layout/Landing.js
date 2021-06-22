import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';



export const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Training Log</h1>
          <p className="lead">
            Create your training log
          </p>
          <div className="buttons"> 
                <Button className="btn btn-primary" 
                        color ="primary"
                        startIcon={<SaveIcon />} 
                        variant="contained"
                        size="large">
                    <Link to="/register">
                    Register
                    </Link>
                </Button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
