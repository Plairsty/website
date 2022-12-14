import React from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';

/**
 * This Component is a button that toggles the color scheme
 *
 * @return {JSX.Element}
 */
export function ColorSchemeToogle(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group position="center" mt="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => {
          return {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === 'dark'
                ? theme.primaryColor
                : theme.colors.gray[7],
          };
        }}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={20} stroke={1.5} />
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
