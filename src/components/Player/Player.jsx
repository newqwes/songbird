import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import React from "react";
import styles from "./player.module.scss";
import ReactPlayer from "react-player";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputProgressVolume: 0.2,
      inputProgressPlay: 0,
      isPlaying: !this.props.isGuessed,
      isMute: false,
      nowTimeShow: 0,
      getDuration: "00",
      a: 0,
    };
    this._isMounted = false;
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };
  componentDidMount = () => {
    this._isMounted = true;
  };
  inputProgressChange = (event) => {
    this.setState({ inputProgressPlay: parseFloat(event.target.value) });
    this.player.seekTo(event.target.value, "fraction");
  };
  inputVolumeChange = (event) => {
    this.setState({ inputProgressVolume: Number(event.target.value) });
  };
  buttonVolume = () => {
    this.setState({ isMute: !this.state.isMute });
  };
  buttonPlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
    this.setState({ getDuration: Math.round(this.player.getDuration()) });
    this._isMounted &&
      setInterval(() => {
        if (this.props.isGuessed) this.setState({ a: this.state.a + 1 });
        if (!this.props.isGuessed) this.setState({ a: 0 });
        if (this.state.a === 1) this.setState({ isPlaying: true });
        if (!this.player) return 0;
        let timePlay = this.player.getCurrentTime() / this.player.getDuration();
        this.setState({ inputProgressPlay: timePlay });
        this.setState({
          nowTimeShow: Math.round(this.player.getCurrentTime()),
        });
      }, 200);
  };
  ref = (player) => {
    this.player = player;
  };
  render() {
    return (
      <>
        <ReactPlayer
          ref={this.ref}
          width='0'
          height='0'
          muted={this.state.isMute}
          volume={this.state.inputProgressVolume}
          playing={!this.state.isPlaying}
          url={this.props.url}
        />

        <div className={styles.player}>
          {this.state.isPlaying ? (
            <PlayCircleOutlineOutlinedIcon
              onClick={this.buttonPlay}
              style={{ fontSize: 45 }}
            />
          ) : (
            <PauseCircleOutlineOutlinedIcon
              onClick={this.buttonPlay}
              style={{ fontSize: 45 }}
            />
          )}
          <input
            className={styles.input__progress}
            value={this.state.inputProgressPlay}
            onChange={this.inputProgressChange}
            type='range'
            min='0'
            max='0.9999999'
            step='any'
          />
          {this.state.isMute ? (
            <VolumeOffIcon
              onClick={this.buttonVolume}
              style={{ fontSize: 40 }}
            />
          ) : (
            <VolumeUpOutlinedIcon
              onClick={this.buttonVolume}
              style={{ fontSize: 40 }}
            />
          )}
          <input
            className={styles.input__volume}
            onChange={this.inputVolumeChange}
            value={this.state.inputProgressVolume}
            type='range'
            min='0'
            max='0.999999'
            step='any'
          />
          <p className={styles.timer}>
            00:
            {this.state.nowTimeShow >= 10
              ? this.state.nowTimeShow
              : "0" + this.state.nowTimeShow}
          </p>
          <p className={styles.timer}>
            00:
            {this.state.getDuration}
          </p>
        </div>
      </>
    );
  }
}

export default Player;
