import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
}));

export default() => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <IconButton disabled={true}><BackIcon/></IconButton>
        <IconButton disabled={true}><ForwardIcon/></IconButton>
      </div>
    </div>
  );
}
