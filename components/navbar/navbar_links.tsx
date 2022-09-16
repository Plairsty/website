import React from 'react';
import { Tooltip, UnstyledButton, createStyles } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

/**
 * @param {Icon} Icon - The icon to display.
 * @return {React.ReactElement} - The NavbarLink component.
 */
export default function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps): React.ReactElement {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).color,
    },
  },
}));
