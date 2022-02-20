import React, { Component } from 'react';

class Login extends Component {
    initialState = {
        name: '',
        username: '',
        password: '',
        toggleSignUp: false,
    }
    state = this.initialState;

    logOrSign () {
        if (toggleSignUp) {

        }
        else {
            

        }

    }

render () {
    return (
        <div>
            <form onSubmit={() => props.login()}>
              <label>
                Email or username
                <input
                  name="emailOrUsername"
                  type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                />
              </label>
              <button type="submit">Log in</button>
            </form>
          <button className='loginButton' onClick={() => props.login()}>
            Login
          </button>
        </div>
      );
    }
}
  

export default Login;
