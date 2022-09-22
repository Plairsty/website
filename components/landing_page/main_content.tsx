import { createStyles } from '@mantine/core';
import React from 'react';
import Hero from './hero';
import Feature from './feature';
const useStyles = createStyles((theme) => {
  return {
    maindiv: {
      height: '100vh',
      padding: '10px',
    },
    banner: {
      border: '1px solid red',
      display: 'flex',
      flexDirection: theme.fn.largerThan('md') ? 'row' : 'column',
    },
    content: {
      width: '75%',
      border: '1px solid black',
    },
    bannerImage: {},
  };
});

const mainContent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.maindiv}>
      <Hero />
      <Feature />
    </div>
  );
};

export default mainContent;
