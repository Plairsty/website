import React from 'react';
import { Table } from '@mantine/core';

const StudentList = () => {
  const elements = [
    { moodle: 20104085, score: 12.011, name: 'Gulshan' },
    { moodle: 20104085, score: 14.007, name: 'Vaishnavi' },
    { moodle: 20104085, score: 88.906, name: 'Gandharvi' },
    { moodle: 20104085, score: 137.33, name: 'Rahul' },
    { moodle: 20104085, score: 140.12, name: 'Mansi' },
    { moodle: 20104085, score: 140.12, name: 'Mayank' },
    { moodle: 20104085, score: 140.12, name: 'Priyanka' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.moodle}</td>
      <td>{element.name}</td>
      <td>{element.score}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Moodle</th>
          <th>Student name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default StudentList;
