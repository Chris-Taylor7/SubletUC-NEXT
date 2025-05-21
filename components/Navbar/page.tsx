'use client';

import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer, Button, Stack, Group, Box, Avatar } from '@mantine/core';
import Link from 'next/link';
import { FaBookmark } from "react-icons/fa";
export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box>
      <Group justify="space-between" p="md" bg="gray.0">
        {/* Burger on the left */}
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />

        {/* App title or logo in center */}
        <Box fw={700} fz="xl">
          My App
        </Box>

        {/* Placeholder right side (can be a user menu later) */}
        <Box w={40} />
      </Group>

      {/* Drawer for nav buttons */}
      <Drawer opened={opened} onClose={close} title="Navigation" padding="md">
        <Stack>
          <Link href="/" passHref>
            <Button size="compact-lg"  onClick={close}>
              Home
            </Button>
          </Link>

          <Link href="/create-listing" passHref>
            <Button size="compact-lg"  onClick={close}>
              Create a Listing
            </Button>
          </Link> 

          <Link href="/view-listings" passHref>
            <Button size="compact-lg"  onClick={close}>
              View Available Listings
            </Button>
          </Link>

          <Link href="/messages" passHref>
            <Button size="compact-lg"  onClick={close}>
              Messages
            </Button>
          </Link>

          <Link href="/bookmarks" passHref>
            <Button size="compact-lg"  onClick={close}>
              <FaBookmark />
            </Button>
          </Link>

          <Link href="/profile" passHref>
            <Button size="compact-lg"  onClick={close}>
              <Avatar color="black" radius="xl">CT</Avatar>
            </Button>
          </Link>

        </Stack>
      </Drawer>
    </Box>
  );
}
