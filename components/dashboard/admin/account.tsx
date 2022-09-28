import { Button, createStyles } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';
import React from 'react';
import UserDropZone from './user/dropzone';
const useStyle = createStyles((theme) => ({
  button: {
  },
}));
const account = () => {
  const { classes } = useStyle();
  return (
    <div className='h-screen'>
      <UserDropZone />
      <Button
        leftIcon={<IconDatabase />} className={classes.button} variant="white">
        Confirm Registeration
      </Button>
    </div>
  );
};

export default account;
