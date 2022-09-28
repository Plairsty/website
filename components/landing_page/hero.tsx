/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import React from 'react';
const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    transition: 'all 0.5s ease',
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span>
              way to prepare yourself for <br /> Placement.
            </Title>
            <Text color="dimmed" mt="md">
              Exercitation consectetur quis et do ut irure proident aute quis.
              Nisi nisi ullamco proident proident ad et incididunt velit
              pariatur deserunt ad consectetur ut eiusmod. Consequat do
              excepteur irure Lorem dolore amet aliqua deserunt in ipsum nostrud
              mollit.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Safe</b> – Verified Companies
              </List.Item>
              <List.Item>
                <b>Fast</b> – Get your results fast rather wasting and waiting
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Group>
          </div>
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}

export default HeroBullets;
