'use client';
import { Card, Text, Button, Title, Grid } from '@mantine/core';

export default function ViewListingsPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} c="#e00122" mb="lg">Available Listings</Title>
      <Grid>
        {[1, 2, 3].map((i) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={i}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text fw={500}>123 Calhoun St</Text>
              <Text c="dimmed" size="sm">2 Bed / 1 Bath · $850/mo</Text>
              <Button color="red" mt="md" fullWidth>View Details</Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
