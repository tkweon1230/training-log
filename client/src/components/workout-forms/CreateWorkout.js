import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createWorkout } from '../../actions/workout';

export const CreateWorkout = ({ createWorkout, history }) => {
    const [formData, setFormData] = useState({
        workoutName: '',
        exercises: '',
        sets: '',
        reps: '',
        notes: ''
    });

    const [displayExerciseInputs, toggleExerciseInputs] = useState(false);
    
    const {
        workoutName,
        exercises,
        sets,
        reps,
        notes

    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createWorkout(formData, history);
    }
    return (
        <Fragment>
            <h1 className="large text-primary">
        Create Your Workout
      </h1>
      
      <small>* = required field</small>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Workout Title" name="workoutName" value={workoutName} 
          onChange={e => onChange(e)} />
        </div>
        <div className="my-2">
          <button onClick={() => toggleExerciseInputs(!displayExerciseInputs)} type="button" className="btn btn-light">
            Add Exercise
          </button>
        </div>
        {displayExerciseInputs && <Fragment>
        <div className="form-group">
          <input type="text" placeholder="* Exercise Name" name="exercises" value={exercises}
          onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Sets" name="sets" value={sets}
          onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Reps" name="reps" value={reps}
          onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <textarea placeholder="Workout notes" name="notes" value={notes}
          onChange={e => onChange(e)}></textarea>
        </div>
        </Fragment>}


        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
      </Fragment>
    )
}

CreateWorkout.propTypes = {
    createWorkout: PropTypes.func.isRequired
};

export default connect(null, { createWorkout })(withRouter(CreateWorkout));