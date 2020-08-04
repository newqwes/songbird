import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import React from 'react';
import styles from './player.module.scss';
import ReactPlayer from 'react-player'


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputProgressVolume: 0.2,
            inputProgressPlay: 0,
            isPlaying: !this.props.isGuessed,
            isMute: false

        }

        this.inputProgressChange = this.inputProgressChange.bind(this);
        this.inputVolumeChange = this.inputVolumeChange.bind(this);
        this.buttonVolume = this.buttonVolume.bind(this);
        this.buttonPlay = this.buttonPlay.bind(this);
    }

    inputProgressChange(event) {
        this.setState({ inputProgressPlay: parseFloat(event.target.value) });
        this.player.seekTo(event.target.value, 'fraction');
    }
    inputVolumeChange(event) {
        this.setState({ inputProgressVolume: Number(event.target.value) });
    }
    buttonVolume() {
        this.setState({ isMute: !this.state.isMute });
    }
    buttonPlay() {
        this.setState({ isPlaying: !this.state.isPlaying });
    }
    ref = player => {
        this.player = player
    }
    render() {
        return (
            <>
                <ReactPlayer ref={this.ref} width='0' height='0' muted={this.state.isMute} volume={this.state.inputProgressVolume} playing={this.state.isPlaying} url={this.props.url} />
                <div className={styles.player}>

                    {
                        this.state.isPlaying
                            ? <PauseCircleOutlineOutlinedIcon onClick={this.buttonPlay} style={{ fontSize: 30 }} />
                            : <PlayCircleOutlineOutlinedIcon onClick={this.buttonPlay} style={{ fontSize: 30 }} />
                    }
                    <input className={styles.input__progress} value={this.state.inputProgressPlay} onChange={this.inputProgressChange} type="range" min="0" max="0.9999999" step="any" />
                    {
                        this.state.isMute
                            ? <VolumeOffIcon onClick={this.buttonVolume} style={{ fontSize: 30 }} />
                            : <VolumeUpOutlinedIcon onClick={this.buttonVolume} style={{ fontSize: 30 }} />
                    }
                    <input className={styles.input__volume} onChange={this.inputVolumeChange} value={this.state.inputProgressVolume} type="range" min="0" max="0.999999" step="any" />
                </div>
            </>
        );
    }
}


export default Player;