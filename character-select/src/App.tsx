import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Image, Box, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import character from './data/dbdata';

// Import framer-motion components and hooks
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
          {character.map((char) => {
            // Use useInView hook without triggerOnce
            const [ref, inView] = useInView({
              threshold: 0.2, // Adjust the threshold to when the animation should trigger
            });

            // Define the transform style based on char.type
            const transformStyle = char.type === 'kid' 
              ? 'scale(1.8) translateY(10%)' 
              : 'scale(1.8) translateY(20%)';

            return (
              <Box key={char.name} style={{
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                border: '2px',
                paddingLeft: '50px',
                clipPath: 'polygon(0 12%, 100% 0, 100% 71%, 0 100%)',
                boxSizing: 'border-box',
              }}>
                <Text size="lg" mt="sm" style={{ marginLeft: '10px' }}>
                  {char.name}
                </Text>
                <motion.div
                  ref={ref} // Attach the ref to the animated component
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view or out of view
                  transition={{ duration: 0.5 }} // Smooth transition
                >
                  <Image
                    src={char.path}
                    alt={char.name}
                    fit="contain"
                    style={{
                      transform: transformStyle, // Apply the conditional transform style
                      transformOrigin: 'center', // Set the scaling to center
                      width: 'auto', // Maintain original width
                      height: 'auto', // Maintain original height
                      maxHeight: '400px', // Set a maximum height if needed
                    }}
                  />
                </motion.div>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </MantineProvider>
  );
}

export { App };
