import React from 'react';
import { Navbar, Center, Stack } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import NavbarLink from './navbar_links';
import Logo from '../Logo/logo';
import { ColorSchemeToogle } from '../Theme/ColorSchemeToogle';
import { adminData } from '../dashboard/admin-component';

interface NavbarMinimalProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Navbar component.
 * @param {number} active - The active state of the navbar.
 * @return {React.ReactElement} - The NavbarLink component.
 */
export function NavbarMinimal({
  active,
  setActive,
}: NavbarMinimalProps): React.ReactElement {
  const links = adminData.map((link, index) => (
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
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
