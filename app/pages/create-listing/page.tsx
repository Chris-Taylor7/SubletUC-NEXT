'use client';
import { TextInput, Textarea, Button, Title, Stack } from '@mantine/core';

export default function CreateListingPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="md">Create a Listing</Title>
      <Stack gap="sm" maw={500}>
        <TextInput label="Address" placeholder="123 Calhoun St" />
        <TextInput label="Rent (monthly)" placeholder="$800" />
        <Textarea label="Description" placeholder="Tell us about your place..." />
        <Button color="red">Submit Listing</Button>
      </Stack>
    </div>
  );
}
