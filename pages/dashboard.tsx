import React from 'react';
import { AppShell, Modal, TextInput } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar/navbar';
import { mockdata } from '../components/data/nav_data';
import { useHotkeys } from '@mantine/hooks';
import router from 'next/router';
import { useAuth } from '../context/auth_context';

const dashboard = () => {
  const [active, setActive] = React.useState(0);
  const [modelOpened, setModelOpened] = React.useState(false);
  const { isUserAuthenticated } = useAuth();

  const componentExecutor = (currentIndex: number) => {
    return mockdata[currentIndex].component;
  };
  useHotkeys([
    [
      'ctrl+K',
      () => (modelOpened ? setModelOpened(false) : setModelOpened(true)),
    ],
  ]);

  React.useEffect(() => {
    isUserAuthenticated() ? router.push('/dashboard') : router.push('/');
  }, []);

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
