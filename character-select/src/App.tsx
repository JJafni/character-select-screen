import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Image, Box, SimpleGrid } from '@mantine/core';



import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import character from './data/dbdata'; // Importing character data

const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');

  // Determine the number of columns based on screen size
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <MantineProvider>

      {/* Allow the Box to expand based on content */}
      <Box style={{
         minHeight: '100vh',
         width: '100vw',
         overflowY: 'auto',
         backgroundImage: 'url(https://i.ibb.co/KF3tpzt/db.jpg)', // Path to your background image
         backgroundSize: 'cover',       // Ensures the image covers the entire area without distortion
          backgroundPosition: 'center',  // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling for a better visual effect
          filter: 'brightness(0.9)',     // Optional: Adjust brightness for readability
      }} mx="auto">

        {/* Use SimpleGrid for responsive layout */}
        <SimpleGrid
          cols={cols}               // Number of columns
          spacing="lg"             // Space between grid items
          p="md"                   // Padding around the grid
        >
          {/* Map through character data to display each character image */}
          {character.map((char) => (
            <Image
              key={char.name}        // Use a unique key for each image
              height={'100%'}           // Use numeric value for height
              src={char.path}        // Path to the character image
              alt={char.name}        // Alt text for accessibility
              fit="contain"          // Ensure the image fits well within its space
            />
          ))}
        </SimpleGrid>

      </Box>


    </MantineProvider>
  );
}

export { App };
