import React, { useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';
import Progress from './Progress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
      '.        .        shuffle  previous play     next     loop     .        .       '
      'playback playback playback playback playback playback playback playback playback'
    `,
  },
  shuffle: { gridArea: 'shuffle' },
  previous: { gridArea: 'previous' },
  play: { gridArea: 'play' },
  next: { gridArea: 'next' },
  loop: { gridArea: 'loop' },
  playback: { gridArea: 'playback', width: '50vw' },
}));

export default ({ song }) => {
  const classes = useStyles();
  const player = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  
  const play = () => player.current.play();
  const pause = () => player.current.pause();
  const PlayIcon = () => isPlaying ? <PauseIcon/> : <PlayArrowIcon/>;

  const onChangeProgress = (event, value) => {
    if (event.type === 'mousedown') setIsDragging(true);
    if (event.type === 'mousemove') setTime(value);
  };

  const onChangeProgressCommitted = (event, value) => {
    setIsDragging(false);
    player.current.currentTime = value;
  };

  return (
    <div className={classes.root}>
      <audio ref={player} src={song}
             onTimeUpdate={() => { if(!isDragging) setTime(player.current.currentTime); }}
             onDurationChange={() => setDuration(player.current.duration)}
             onPause={() => setIsPlaying(false)}
             onPlay={() => setIsPlaying(true)} />
      <IconButton className={classes.shuffle}><ShuffleIcon/></IconButton>
      <IconButton className={classes.next}><SkipNextIcon/></IconButton>
      <IconButton className={classes.previous}><SkipPreviousIcon/></IconButton>
      <IconButton onClick={isPlaying? pause : play} className={classes.play}><PlayIcon/></IconButton>
      <IconButton className={classes.loop}><LoopIcon/></IconButton>
      <div className={classes.playback}>
        <Progress value={time} onChange={onChangeProgress} onChangeCommitted={onChangeProgressCommitted} max={duration}/>
      </div>
    </div>
  );
}
