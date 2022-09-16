import React from 'react';
import { AppShell } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar/navbar';
import { mockdata } from '../components/data/nav_data';

const dashboard = () => {
  const [active, setActive] = React.useState(0);

  const componentExecutor = (currentIndex: number) => {
    return mockdata[currentIndex].label;
  };
  return (
    <AppShell
      padding="md"
      navbar={<NavbarMinimal active={active} setActive={setActive} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {componentExecutor(active)}
    </AppShell>
  );
};

export default dashboard;
