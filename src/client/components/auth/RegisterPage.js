import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import userActions from '../../actions/user/userActions';
import * as types from '../../actions/user/userActionsTypes';
import userStore from '../../stores/user/userStore';

class RegisterPage extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                username: '',
                password: ''
            }
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRespond = this.onRespond.bind(this);

        userStore.on(types.USER_REGISTERED, this.onRespond);
    }

    componentWillUnmount() {
        userStore.removeListener(types.USER_REGISTERED, this.onRespond);
    }

    render() {
        return(
            <section>
                <h2>Register</h2>
                
                <form>
                    <div>
                        <TextField
                            name="username"
                            label="Username"
                            value={this.state.user.username}
                            onChange={this.onInputChange}
                        />           
                    </div>

                    <div>
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            value={this.state.user.password}
                            onChange={this.onInputChange}
                        />            
                    </div>

                    <div>
                        <Button raised onClick={this.onSubmit}>Register</Button>    
                    </div>
                </form>
            </section>
        );
    }

    onInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        let newState = Object.assign({}, this.state.user, {[fieldName]: fieldValue});

        this.setState({
            user: newState
        })
    }

    onSubmit(event) {
        event.preventDefault();
        userActions.register(this.state.user);
    }

    onRespond(data) {
        console.log(data);
    }
}

export default RegisterPage;