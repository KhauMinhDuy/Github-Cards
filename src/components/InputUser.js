import React, {Component} from 'react';
import axios from 'axios';

class InputUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userNameInput: ''
        };
    }


    handleSubmot = async (event) => {
        event.preventDefault();
        let promise = await axios.get(`https://api.github.com/users/${this.state.userNameInput}`);
        this.props.onSubmit(promise.data);
        this.setState({
            userNameInput: ''
        });
    };

    render() {
        return (
            <div>
                <form className='w-75 mx-auto row' onSubmit={this.handleSubmot} action="#" method="get">
                    <input className='col-8 mx-auto' type="text" name="username" id="username"
                           value={this.state.userNameInput}
                           onChange={e => this.setState({userNameInput: e.target.value})}
                           placeholder='Enter GitHub Your Name' required/>
                    <input type="submit" value="Search" className='col-3 btn btn-primary mx-auto'/>
                </form>
            </div>
        );
    }
}

export default InputUser;