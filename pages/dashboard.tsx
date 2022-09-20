import React from 'react';
import { AppShell, Modal, TextInput } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar/navbar';
import { mockdata } from '../components/data/nav_data';
import { useHotkeys } from '@mantine/hooks';

const dashboard = () => {
  const [active, setActive] = React.useState(0);
  const [modelOpened, setModelOpened] = React.useState(false);

  const componentExecutor = (currentIndex: number) => {
    return mockdata[currentIndex].component;
  };
  useHotkeys([
    [
      'ctrl+K',
      () => (modelOpened ? setModelOpened(false) : setModelOpened(true)),
    ],
  ]);
  return (
    <>
      <Modal
        withCloseButton={false}
        size="lg"
        opened={modelOpened}
        onClose={() => setModelOpened(false)}
      >
        <TextInput placeholder="Search" />
      </Modal>
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
    </>
  );
};

export default dashboard;
