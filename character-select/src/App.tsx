import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Image, Box, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import character from './data/dbdata';

const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');

  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <MantineProvider>
      <Box style={{
        minHeight: '100vh',
        width: '100vw',
        overflowY: 'auto',
        backgroundImage: 'url(https://i.ibb.co/KF3tpzt/db.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.9)',
      }} mx="auto">

        <SimpleGrid cols={cols} spacing="lg" p="md">
          {character.map((char) => (
            <Box key={char.name} style={{
              textAlign: 'center',
              border: '2px solid white', // Add border
              borderRadius: '8px', // Rounded corners
              padding: '10px', // Inner spacing
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: Background color for contrast
            }}>  <Text size="lg" color="white" mt="sm">
                {char.name}
              </Text>
              <Image
                height={'100%'}
                src={char.path}
                alt={char.name}
                fit="contain"
              />

            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MantineProvider>
  );
}

export { App };
