import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSkipTime, selectDuration, selectCurrentTime } from '../../state/player';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const formatTime = (totalSeconds) => {
  const date = new Date(0);
  date.setSeconds(totalSeconds);
  return date.toISOString().substr(14, 5);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },

  currentTime: {
    alignSelf: 'center',
    paddingRight: theme.spacing(2),
  },

  slider: {
    alignSelf: 'center',
  },

  duration: {
    alignSelf: 'center',
    paddingLeft: theme.spacing(2),
  }
}));

export default (options) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const duration = useSelector(state => selectDuration(state));
  const currentTime = useSelector(state => selectCurrentTime(state));
  const [isDragging, setIsDragging] = useState(false);
  const [sliderValue, setSliderValue] = useState(currentTime);

  const onChangeProgress = (event, value) => {
    if (event.type === 'mousedown') setIsDragging(true);
    if (event.type === 'mousemove') setSliderValue(value);
  };

  const onChangeProgressCommitted = (_event, value) => {
    setIsDragging(false);
    dispatch(setSkipTime(value));
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.currentTime} variant='subtitle2'>
        {formatTime(isDragging ? sliderValue : currentTime)}
      </Typography>

      <Slider className={classes.slider}
              value={isDragging ? sliderValue : currentTime}
              onChange={onChangeProgress}
              onChangeCommitted={onChangeProgressCommitted}
              max={duration}/>

      <Typography className={classes.duration} variant='subtitle2'>
        {formatTime(duration)}
      </Typography>
    </div>
  );
};
