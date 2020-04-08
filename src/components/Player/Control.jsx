import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying, selectIsPlaying } from '../../state/player';
import Progress from './Progress';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
      '.        .        shuffle  previous play     next     loop     .        .       '
      'playback playback playback playback playback playback playback playback playback'
    `,
  },
  shuffle: {
    gridArea: 'shuffle'
  },
  previous: {
    gridArea: 'previous'
  },
  play: {
    gridArea: 'play'
  },
  next: {
    gridArea: 'next'
  },
  loop: {
    gridArea: 'loop'
  },
  playback: {
    gridArea: 'playback',
    width: '50vw'
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPlaying = useSelector(state => selectIsPlaying(state));
  const pause = () => dispatch(setIsPlaying(false));
  const play = () => dispatch(setIsPlaying(true));
  const PlayIcon = () => isPlaying ? <PauseIcon/> : <PlayArrowIcon/>;

  return (
    <div className={classes.root}>
      <IconButton className={classes.shuffle}>
        <ShuffleIcon/>
      </IconButton>

      <IconButton className={classes.next}>
        <SkipNextIcon/>
      </IconButton>
      
      <IconButton className={classes.previous}>
        <SkipPreviousIcon/>
      </IconButton>

      <IconButton className={classes.play}
                  onClick={isPlaying? pause : play}>
        <PlayIcon/>
      </IconButton>
      
      <IconButton className={classes.loop}>
        <LoopIcon/>
      </IconButton>

      <div className={classes.playback}>
        <Progress/>
      </div>
    </div>
  );
}
