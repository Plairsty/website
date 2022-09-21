import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Modal,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth_context';
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    // eslint-disable-next-line max-len
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const AuthenticationImage = () => {
  const [modelOpened, setModelOpened] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isUserAuthenticated } = useAuth();
  const onSubmit = () => {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        login(
          JSON.parse(data)['access_token'],
          JSON.parse(data)['refresh_token'],
        );
        router.push('/dashboard');
      });
  };

  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      // username: (value) => (value.length > 6 ? null : 'Invalid username'),
    },
  });

  useEffect(() => {
    isUserAuthenticated() ? router.push('/dashboard') : null;
  }, []);
  return (
    <div className={classes.wrapper}>
      <Modal
        centered
        opened={modelOpened}
        onClose={() => setModelOpened(false)}
        title="Whatever!"
      >
        WOrking
      </Modal>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome back to Plairsty!
        </Title>

        <form
          onSubmit={form.onSubmit((values) => {
            setUsername(values.username);
            setPassword(values.password);
            onSubmit();
          })}
        >
          <TextInput
            label="Username"
            placeholder="Username"
            size="md"
            {...form.getInputProps('username')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps('password')}
          />
          <Button
            fullWidth
            mt="xl"
            size="md"
            className="bg-blue-700"
            type="submit"
          >
            Login
          </Button>
        </form>

        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> weight={700} onClick={() => setModelOpened(true)}>
            Request access
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default AuthenticationImage;
