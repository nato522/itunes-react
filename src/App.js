import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    search(){
        console.log(this.state);
        const BASE_URL = 'https://itunes.apple.com/search?'
        const FETCH_URL = `${BASE_URL}term=${this.state.query}`;

        console.log(FETCH_URL);
    }

    keyPress(event){
        if (event.key === 'Enter'){
            this.search()
        }
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">iTunes</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search an artist..."
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={(event) => this.keyPress(event)}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;