import React from 'react';
import { AppShell, Modal, TextInput } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar/navbar';
import { adminData } from '../components/dashboard/admin-component';
import { useHotkeys } from '@mantine/hooks';
import router from 'next/router';
import { useAuth } from '../context/auth_context';
import { hrData } from '../components/dashboard/hr-component';
import { studentData } from '../components/dashboard/student-component';
import HomeLayout from '../layout/home.layout';
const dashboard = () => {
  const [active, setActive] = React.useState(0);
  const [modelOpened, setModelOpened] = React.useState(false);
  const { isUserAuthenticated, role, logout } = useAuth();

  const componentExecutor = (currentIndex: number) => {
    switch (role) {
      case 'admin':
        return adminData[currentIndex].component;
      case 'hr':
        return hrData[currentIndex].component;
      case 'user':
        return studentData[currentIndex].component;
      default:
        // Reload animation
        return <div>Reload</div>;
    }
  };

  useHotkeys([
    [
      'ctrl+K',
      () => (modelOpened ? setModelOpened(false) : setModelOpened(true)),
    ],
  ]);

  React.useEffect(() => {
    isUserAuthenticated()
      ? () => {
          console.log('user is authenticated');
        }
      : router.push('/');
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
        navbar={
          <NavbarMinimal
            active={active}
            setActive={setActive}
            logout={logout}
            data={role === 'admin' ? adminData : 'hr' ? hrData : studentData}
          />
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <HomeLayout>{componentExecutor(active)}</HomeLayout>
      </AppShell>
    </>
  );
};

export default dashboard;
