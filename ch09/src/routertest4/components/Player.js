import React, { Component } from 'react';
import Youtube from "./Youtube";

class Player extends Component {

    bindYoutubeLink = (props) => {  
        let song = props.songs.find((song)=> {
            return song.id === parseInt(props.match.params.songid, 10);
        }); 
        if (song !== null) {
            this.currentLink = song.youtube_link;
        } else {
            this.currentLink = '';
        }
    }
    
    // Player는 마운트될때도 song id를 받아서 Youtube 링크를 걸어줘야 한다.
    componentWillMount() {
        this.bindYoutubeLink(this.props);  
    }

    // 새로운 속성을 받았을때도(리스트 클릭하여 song id가 변경되었을 경우) Youtube 링크를 걸어줘야 한다.
    componentWillReceiveProps(nextProps) {
        this.bindYoutubeLink(nextProps);
    }
    
    render() {
        return (
            <div className="well">
                { this.currentLink !== "" ? 
                <Youtube video={this.currentLink} 
                    width="320" height="240"
                    autoplay="1" rel="1" modest="1" />     
                : '' }
            </div>
        )
    }
}

export default Player;