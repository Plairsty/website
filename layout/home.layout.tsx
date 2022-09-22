import React from 'react';
import { Text } from '@mantine/core';
import { useAuth } from '../context/auth_context';
interface props {
  children: React.ReactNode;
}

const layoutHome = ({ children }: props) => {
  const { user } = useAuth();
  return (
    <div className="">
      <Text size="xl" weight="bold" p="md">
        Hello {user}!
      </Text>
      {children}
    </div>
  );
};

export default layoutHome;
