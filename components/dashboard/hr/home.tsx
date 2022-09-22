/* eslint-disable max-len */
import React from 'react';
import { TableSelection } from './components/table';

const home = () => {
  const data = [
    {
      id: '1',
      avatar:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Robert Wolfkisser',
      job: 'Engineer',
      email: 'rob_wolf@gmail.com',
    },
    {
      id: '2',
      avatar:
        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Jill Jailbreaker',
      job: 'Engineer',
      email: 'jj@breaker.com',
    },
    {
      id: '3',
      avatar:
        'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Henry Silkeater',
      job: 'Designer',
      email: 'henry@silkeater.io',
    },
    {
      id: '4',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Bill Horsefighter',
      job: 'Designer',
      email: 'bhorsefighter@gmail.com',
    },
    {
      id: '5',
      avatar:
        'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Jeremy Footviewer',
      job: 'Manager',
      email: 'jeremy@foot.dev',
    },
  ];
  return (
    <>
      <div>hr home</div>
      {/* Should Contain,
                1. List of all the students
                  i. List of all the students with their details
                    I. Name
                    II. Email
                    III. Phone
                    IV. Course
                    V. Batch
                    VI. Status
                    VII. Actions
                        1. View
                        2. Approve
                        3. Reject
                2. Can create a new hiring drive
                3. Can view all the students who have applied for the hiring drive
                4. Can view all the students who have been selected for the hiring drive
            */}
      <TableSelection data={data} />
    </>
  );
};

export default home;
