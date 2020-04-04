import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import Control from './Control';
import ExtraControl from './ExtraControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },

  info: {
    alignSelf: 'center',
  },

  control: {
    alignSelf: 'center',
  },

  extraControl: {
    alignSelf: 'center',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Info/>
      </div>

      <div className={classes.control}>
        <Control/>
      </div>

      <div className={classes.extraControl}>
        <ExtraControl/>
      </div>
    </div>
  );
}
