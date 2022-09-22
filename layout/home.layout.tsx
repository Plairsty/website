import React from 'react';
import { Text } from '@mantine/core';
import { useAuth } from '../context/auth_context';
interface props {
  children: React.ReactNode;
}

const layoutHome = ({ children }: props) => {
  const { user } = useAuth();
  return (
    <>
      <Text size="xl" weight="bold" p="sm">
        Hello {user}!
      </Text>
      {children}
    </>
  );
};

export default layoutHome;
