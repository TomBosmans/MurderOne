import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAudioContext } from '../../audioContext';
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
  const audioContext = useAudioContext();
  const gainNode = audioContext.gainNode;

  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(gainNode.gain.value);
  const VolumeIcon = () => {
    if (muted) return <VolumeOffIcon/>;
    if (volume <= 0) return <VolumeMuteIcon/>;
    if (volume <= 0.5) return <VolumeDownIcon/>;
    return <VolumeUpIcon/>;
  };

  const onClickMute = () => {
    setMuted(!muted);
    gainNode.gain.value = !muted ? 0 : volume;
  };

  const onChangeVolume = (_, value) => {
    setVolume(value);
    gainNode.gain.value = value;
  };

  return (
    <div className={classes.root}>
      <IconButton className={classes.button}>
        <QueueMusicIcon/>
      </IconButton>

      <IconButton className={classes.button}>
        <CastIcon/>
      </IconButton>

      <IconButton className={classes.button} onClick={onClickMute}>
        <VolumeIcon/>
      </IconButton>

      <Slider className={classes.slider}
              disabled={muted}
              value={muted ? 0 : volume}
              min={0}
              max={1}
              step={0.01}
              onChange={onChangeVolume}/>
    </div>
  );
}

