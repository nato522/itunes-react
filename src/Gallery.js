import React, { Component } from 'react';
import './App.css'

class Gallery extends Component {
    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        audio.play();
    }

    render(){
        console.log(this.props);
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map((track, k) => {
                        const trackImg = track.album.images[0].url;
                        return(
                            <div key={k} className="track" onClick={() => this.playAudio(track.preview_url)}>
                                <img src={trackImg} alt="track" className="track-img"/>
                                <p className="track-text">{track.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;