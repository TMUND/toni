import React from 'react';
import timezones from '../../data/timezones.js';
import map from 'lodash/map';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    const options = map(timezones, (val, key) =>
      <option key={ val  } value={ val }>{ key }</option>
    )

    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <h1>Sign up today!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={ this.state.username }
            onChange={ this.onChange.bind(this) } />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={ this.state.email }
            onChange={ this.onChange.bind(this) } />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={ this.state.password }
            onChange={ this.onChange.bind(this) } />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            className="form-control"
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange.bind(this) } />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            name="timezone"
            className="form-control"
            value={ this.state.timezone }
            onChange={ this.onChange.bind(this) }
          >
            <option value="" disabled>Choose your timezone</option>
            { options }
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lrg">Sign Up</button>
        </div>

      </form>
    );
  }
}

export default SignupForm;
