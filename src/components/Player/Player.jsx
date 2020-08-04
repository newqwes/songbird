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
            isMute: false,
            nowTimeShow: 0,
            a: 0

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
        setInterval(() => {


            if (this.props.isGuessed) this.setState({ a: this.state.a + 1 }); // тут творится жесть!)) ловлю первую инициализацию когда только меняется isGuessed
            if (!this.props.isGuessed) this.setState({ a: 0 });               // c false на true и сверяю если равна этому значению (это будет только 
                                                                              // единожды 100мс если точнее) тогда останавливаю плеер при следующей проверке уже не будет
            if (this.state.a === 1) this.setState({ isPlaying: true });       // и плеером можно спокойно пользоваться


            let timePlay = this.player.getCurrentTime() / this.player.getDuration();
            this.setState({ inputProgressPlay: timePlay });
            this.setState({ nowTimeShow: Math.round(this.player.getCurrentTime()) });
        }, 200);
    }
    ref = player => {
        this.player = player
    } 
    render() {
        return (
            <>
                <ReactPlayer ref={this.ref} width='0' height='0' muted={this.state.isMute}
                    volume={this.state.inputProgressVolume}
                    playing={!this.state.isPlaying} url={this.props.url} />
                <h2 className={styles.timer}>00:{this.state.nowTimeShow >= 10 ? this.state.nowTimeShow : "0" + this.state.nowTimeShow}</h2>
                <div className={styles.player}>
                    {
                        this.state.isPlaying
                            ? <PlayCircleOutlineOutlinedIcon onClick={this.buttonPlay} style={{ fontSize: 30 }} />
                            : <PauseCircleOutlineOutlinedIcon onClick={this.buttonPlay} style={{ fontSize: 30 }} />
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