import React from 'react';
import { Navbar, Center, Stack, createStyles } from '@mantine/core';
import { IconLogout, TablerIcon } from '@tabler/icons';
import NavbarLink from './navbar_links';
import Logo from '../Logo/logo';
import { ColorSchemeToogle } from '../Theme/ColorSchemeToogle';

type NavBarProps = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  data: {
    icon: TablerIcon;
    label: string;
    component: JSX.Element;
  }[];
  logout: () => void;
};

const useStyles = createStyles((theme) => {
  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? '#1c1c1c' : '#fff',
      color: theme.colorScheme === 'dark' ? '#fff' : '#000',
      minHeight: 100,
      padding: 'md',
      width: 80,

      [theme.fn.smallerThan('sm')]: {
        width: 70,
        padding: 'xs',
      },
    },
  };
});

/**
 * Navbar component.
 * @param {data} active - The active state of the navbar
 * and the component to be rendered.
 * @return {React.ReactElement} - The NavbarLink component.
 */
export function NavbarMinimal({
  active,
  setActive,
  data,
  logout,
}: NavBarProps): React.ReactElement {
  const { classes } = useStyles();
  const links = data.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar
      width={{
        base: 80,
      }}
      p="md"
      className={classes.navbar}
    >
      <Center>
        <Logo />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <ColorSchemeToogle />
          <NavbarLink icon={IconLogout} label="Logout" onClick={logout} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
