import React from 'react';
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
  const duration = formatTime(options.max);
  const currentTime = formatTime(options.value);
  
  return (
    <div className={classes.root}>
      <Typography className={classes.currentTime} variant='subtitle2'>
        {currentTime}
      </Typography>

      <Slider className={classes.slider}{...options}/>

      <Typography className={classes.duration} variant='subtitle2'>
        {duration}
      </Typography>
    </div>
  );
};
