import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }

    search(){
        console.log(this.state);
        const BASE_URL = 'https://itunes.apple.com/search?'
        const FETCH_URL = `${BASE_URL}term=${this.state.query}&limit=1`;

        console.log(FETCH_URL);

        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.results[0];
            console.log(artist);
            this.setState({artist});
        });
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
                <Profile
                    artist={this.state.artist}
                />
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;