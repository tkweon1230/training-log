import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUser } from '../../actions/user';

export const Dashboard = ({ getUser, auth: { user }, workout }) => {
    useEffect(() => {
        getUser();
    }, [getUser]);

    return <Fragment>
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p>
            { user && user.name }'s Training log
        </p>
        
        {user.workout !== null ? (
            <Fragment>has</Fragment>
        ): (
              
        <Fragment>
                <Link to='/create-workout' className="btn btn-primary my-1">
                 Create a Workout
                </Link>
        </Fragment>

        )}
    </Fragment>     
};

Dashboard.propTypes = {
    getUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    workout: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    workout: state.user
})

export default connect(mapStateToProps, { getUser })(Dashboard);
