import React from 'react';
import { Avatar, Group, Table, Text, Anchor, ActionIcon } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons';
interface UsersTableProps {
  data: {
    avatar: string;
    name: string;
    moodle: number;
    email: string;
    phone: string;
  }[];
}

const StudentTable = ({ data }: UsersTableProps) => {
  const rows = data.map((element) => (
    <>
      <tr key={element.name}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={element.avatar} radius={30} />
            <Text size="sm" weight={500}>
              {element.name}
            </Text>
          </Group>
        </td>

        <td>
          <Text size="sm" weight={500}>
            {element.moodle}
          </Text>
        </td>
        <td>
          <Anchor<'a'>
            size="sm"
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            {element.email}
          </Anchor>
        </td>

        <td>
          <Text size="sm" color="dimmed">
            {element.phone}
          </Text>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon>
              <IconPencil size={16} stroke={1.5} />
            </ActionIcon>
            <ActionIcon color="red">
              <IconTrash size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    </>
  ));
  return (
    <>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Moodle</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default StudentTable;
