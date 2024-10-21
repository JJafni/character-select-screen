import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, BackgroundImage, Image, Box, SimpleGrid } from '@mantine/core';
import character from './data/dbdata'; // Importing character data
import image from './assets/img/db.jpeg';

const App = () => {
  return (
    <MantineProvider>
      <Box style={{ height: '100vh', width: '100vw' }} mx="auto">
        <BackgroundImage
          src={image}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Use SimpleGrid for responsive layout */}
          <SimpleGrid 
            cols={3}               // Number of columns
            spacing="lg"           // Space between grid items
            breakpoints={[         // Responsive breakpoints
              { maxWidth: 'md', cols: 2 },
              { maxWidth: 'sm', cols: 1 },
            ]}
            p="md"                 // Padding around the grid
          >
            {/* Map through ImgCharacterData to display each character image */}
            {character.map((char) => (
              <Image
                key={char.name} // Use a unique key for each image
                height={500}     // Use numeric value for height
                src={char.path}  // Path to the character image
                alt={char.name}  // Alt text for accessibility
                fit="contain"     // Ensure the image fits well within its space
              />
            ))}
          </SimpleGrid>
        </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}

export { App };
