import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, BackgroundImage, Center, Text, Box } from '@mantine/core';
import image from './assets/img/db.jpeg';

const App = () => {
  return (
    <MantineProvider>
      <Box style={{ height: '100vh', width: '100vw' }} mx="auto">
        <BackgroundImage
          src={image}
          style={{ height: '100%', width: '100%' }}

        >
          <Center p="md">
            {/* You can add content here if needed */}
            <Text color="white" size="xl">Welcome to My App</Text>
          </Center>
        </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}

export { App };
