import React from 'react';
import { Navbar, Center, Stack } from '@mantine/core';
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
  const links = data.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md" className="min-h-max">
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
