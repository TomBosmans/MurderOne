import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMuted, setVolume, selectIsMuted, selectVolume } from '../../state/player';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import CastIcon from '@material-ui/icons/Cast';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'center',
  },
  slider: {
    alignSelf: 'center',
    width: theme.spacing(10),
  }
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const muted = useSelector(state => selectIsMuted(state));
  const volume = useSelector(state => selectVolume(state));

  const onMute = () => dispatch(setIsMuted(!muted));
  const onVolumeChange = (_, value) => dispatch(setVolume(value));

  const VolumeIcon = () => {
    if (muted) return <VolumeOffIcon/>;
    if (volume <= 0) return <VolumeMuteIcon/>;
    if (volume <= 0.5) return <VolumeDownIcon/>;
    return <VolumeUpIcon/>;
  };

  return (
    <div className={classes.root}>
      <IconButton className={classes.button}>
        <QueueMusicIcon/>
      </IconButton>

      <IconButton className={classes.button}>
        <CastIcon/>
      </IconButton>

      <IconButton className={classes.button}
                  onClick={onMute}>
        <VolumeIcon/>
      </IconButton>

      <Slider className={classes.slider}
              disabled={muted}
              value={muted ? 0 : volume}
              min={0}
              max={1}
              step={0.01}
              onChange={onVolumeChange}/>
    </div>
  );
}

