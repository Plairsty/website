/* eslint-disable max-len */
import { createStyles, Text, SimpleGrid, Container, Card } from '@mantine/core';
import {
  IconAddressBook,
  IconCertificate2,
  IconCode,
  IconReportMoney,
} from '@tabler/icons';
import React from 'react';

const mockdata = [
  {
    title: 'Course Completed',
    description: '10',
    icon: IconAddressBook,
  },
  {
    title: 'Certifications',
    description: '1',
    icon: IconCertificate2,
  },
  {
    title: 'Internships',
    description: '5 Months',
    icon: IconReportMoney,
  },
  {
    title: 'projects',
    description: '5',
    icon: IconCode,
  },
];
const useStyles = createStyles((theme) => {
  return {
    box: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      textAlign: 'center',
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
      },
    },
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
      }`,
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {},
    },
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  };
});
const home = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="md"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      {/* Should contain,
            1. List of all the courses
            2. List of all the certifications
            3. List of all the trainings
            4. List of all the events such as hackathons, workshops, etc.
            5. List of all the internships
            6. List of all the jobs
            7. List of all the projects
      */}
      <Container className="m-0">
        <SimpleGrid
          cols={4}
          spacing="lg"
          mt={5}
          className=""
          breakpoints={[
            {
              maxWidth: 'xl',
              cols: 1,
              minWidth: 'xs',
              spacing: 'md',
            },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default home;
