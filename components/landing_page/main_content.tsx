import { createStyles } from '@mantine/core';
import React from 'react';
import Hero from './hero';
import Feature from './feature';
import Footer from './footer';
import Carousal from './carousal';
import Faq from './faq';
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
      <Carousal />
      <Faq categories={categories} />
      <Footer
        links={[
          {
            label: 'Home',
            link: '/',
          },
        ]}
      />
    </div>
  );
};

export default mainContent;

const categories = [
  {
    label: 'Customer Support',
    image:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'User Guides',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Sales Questions',
    image:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];
