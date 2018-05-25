import React, { Component } from 'react';
import './App.css';

class Profile extends Component{
    render(){
        let artist = {
            artistName: '',
            collectionName: '',
            artworkUrl100: ''
        };
        artist = this.props.artist !== null ? this.props.artist : artist;

        return(
            <div>
                <img
                    alt="Album cover"
                    className="profile-img"
                    src={artist.artworkUrl100}
                />
                <div>Artist name: {artist.artistName}</div>
                <div>Album name: {artist.collectionName}</div>
            </div>
        )
    }
}

export default Profile;