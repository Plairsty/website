import { useRouter } from 'next/router';
import React from 'react';
import { Avatar, Text, Paper } from '@mantine/core';

interface UserInfoActionProps {
    avatar: string;
    name: string;
    email: string;
    job: string;
}

const profile = ({ avatar, name, email, job }: UserInfoActionProps) => {
    const router = useRouter();
    const { id } = router.query;
    const idPrefix = id?.slice(0, 5);
    const avatarUrl = `https://admission.apsit.org.in/cloud/id/cloud/student/photos/${idPrefix}/${id}.jpg`;
    return (
        <>
            <Paper
                radius="md"
                withBorder
                p="lg"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme
                        === 'dark' ? theme.colors.dark[8] : theme.white,
                })}
            >
                <Avatar src={avatarUrl} size={120} radius={120} mx="auto" />
                <Text align="center" size="lg" weight={500} mt="md">
                    {name}
                </Text>
                <Text align="center" color="dimmed" size="sm">
                    {email} • {job}
                </Text>

            </Paper>
        </>
    );
};


export default profile;
