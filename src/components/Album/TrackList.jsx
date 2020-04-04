import React from 'react';

import List from '@material-ui/core/List';
import Track from './Track';

export default () => {
  const songs = [
    { name: 'Disguise', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Headache', bandName: 'Motionless in White', duration: '3:57' },
    { name: '<c0de>', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Thoughts & Prayers', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Legacy', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Undead Ahead 2:  The Tale of the Midnight Ride', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Holding On To Smoke', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Another Life', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Broadcasting From Beyond the Grave:  Death Inc.', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Brand New Numb', bandName: 'Motionless in White', duration: '3:57' },
    { name: 'Catharsis', bandName: 'Motionless in White', duration: '3:57' }
  ];

  const createTrack = ({ name, bandName, duration}, index) => (
    <Track key={index} name={name} bandName={bandName} duration={duration}/>
  );

  return <List>{songs.map(createTrack)}</List>;
};
