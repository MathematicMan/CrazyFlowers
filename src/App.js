import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peremennaya: false
        }
    }

    vhod = () => {
        this.setState({
            peremennaya: !this.state.peremennaya
        })
    }

    render() {
        return (
            <div>
                {this.state.peremennaya ? (
                    <span onClick={this.vhod}>Pidor voshel</span>
                ) : (
                    <Button onClick={this.vhod}>Vhod Pidora</Button>) }

            </div>
        )
    }
}

export default App;
