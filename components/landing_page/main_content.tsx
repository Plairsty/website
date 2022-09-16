import { createStyles } from '@mantine/core';
import { Container } from '@mantine/core';
import React from 'react';
import { Image } from '@mantine/core';
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
  const imageUrl =
    'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80';

  const { classes } = useStyles();
  return (
    <div className={classes.maindiv}>
      <Container className={classes.banner}>
        {/* Left */}
        <Container className={classes.content}>
          Get yourself a job with
          <strong>Plairsty</strong>
        </Container>
        {/* Right */}
        <Image
          radius="md"
          src={imageUrl}
          alt="Random unsplash image"
          className={classes.bannerImage}
        />
      </Container>
    </div>
  );
};

export default mainContent;
