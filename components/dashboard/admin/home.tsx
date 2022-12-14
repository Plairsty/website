import {
  Box,
  createStyles,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons';
import React from 'react';
import StudentTable from './students-list';
import studentData from './temp-data';
const useStyles = createStyles((theme) => ({
  progressLabel: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
  },

  stat: {
    borderBottom: '3px solid',
    paddingBottom: 5,
  },

  statCount: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.3,
  },

  diff: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}));

const home = () => {
  const total = '375,560';
  const diff = 5.2;
  const data = [
    {
      label: 'Certification',
      count: '20',
      part: 59,
      color: '#47d6ab',
    },
    {
      label: 'Training',
      count: '121',
      part: 35,
      color: '#03141a',
    },
    {
      label: 'Courses',
      count: '31',
      part: 6,
      color: '#4fcdf7',
    },
  ];

  const { classes } = useStyles();
  const segments = data.map((segment) => ({
    value: segment.part,
    color: segment.color,
    label: segment.part > 10 ? `${segment.part}%` : undefined,
  }));

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      sx={{ borderBottomColor: stat.color }}
      className={classes.stat}
    >
      <Text transform="uppercase" size="xs" color="dimmed" weight={700}>
        {stat.label}
      </Text>

      <Group position="apart" align="flex-end" spacing={0}>
        <Text weight={700}>{stat.count}</Text>
        <Text
          color={stat.color}
          weight={700}
          size="sm"
          className={classes.statCount}
        >
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <>
      <Paper withBorder p="xl" radius="md">
        <Group position="apart">
          <Group align="flex-end" spacing="md">
            <Text size="xl" weight={700}>
              {total}
            </Text>
            <Text color="teal" className={classes.diff} size="sm" weight={700}>
              <span>{diff}%</span>
              <IconArrowUpRight
                size={16}
                style={{ marginBottom: 4 }}
                stroke={1.5}
              />
            </Text>
          </Group>
          <IconDeviceAnalytics
            size={20}
            className={classes.icon}
            stroke={1.5}
          />
        </Group>
        <Text size="sm" color="dimmed" weight={700}>
          Total Users
        </Text>

        <Progress
          sections={segments}
          size={34}
          classNames={{ label: classes.progressLabel }}
          mt={40}
        />
        <SimpleGrid
          cols={3}
          breakpoints={[{ maxWidth: 'xs', cols: 1 }]}
          mt="xl"
        >
          {descriptions}
        </SimpleGrid>
      </Paper>
      {/* Table */}
      <Paper withBorder p="xl" radius="md" mt="sm">
        <StudentTable data={studentData.data} />
      </Paper>
    </>
  );
};

export default home;
