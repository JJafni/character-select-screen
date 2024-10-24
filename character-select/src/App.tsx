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

            return (

              <Box style={{
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                border: '2px solid white',
                paddingLeft: '50px',
                boxSizing: 'border-box',
              }}>
                <Text size="lg" color="white" mt="sm" style={{ marginLeft: '10px' }}>
                  {char.name}
                </Text> <motion.div
                  ref={ref} // Attach the ref to the animated component
                  key={char.name}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view or out of view
                  transition={{ duration: 0.5 }} // Smooth transition
                >
                  <Image
                    height={'100%'}
                    src={char.path}
                    alt={char.name}
                    fit="contain"
                  /></motion.div>
              </Box>

            );
          })}
        </SimpleGrid>
      </Box>
    </MantineProvider>
  );
}

export { App };
