import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Image, Box, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import character from './data/dbdata';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

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
            const [ref, inView] = useInView({ threshold: 0.2 });
            const transformStyle = char.type === 'kid' ? 'scale(1.8) translateY(10%)' : 'scale(1.8) translateY(20%)';

            // State to handle hover and current form index
            const [isHovered, setIsHovered] = useState(false);
            const [currentFormIndex, setCurrentFormIndex] = useState(0);

            // Timer to switch forms every second when hovered
            useEffect(() => {
              let timer: NodeJS.Timeout | undefined; // Explicitly type the timer
              if (isHovered) {
                timer = setInterval(() => {
                  setCurrentFormIndex((prevIndex) => {
                    // Check if there's a next form to show
                    if (char.characters && prevIndex + 1 < char.characters.length) {
                      return prevIndex + 1; // Move to the next form
                    }
                    return prevIndex; // Stay on the last form
                  });
                }, 2500); // Change every 1 second
              } else {
                clearInterval(timer); // Clear the timer when not hovered
                setCurrentFormIndex(0); // Reset to the first form when not hovered
              }
              return () => clearInterval(timer); // Cleanup on unmount or change
            }, [isHovered]);

            return (
              <Box
                key={char.name}
                style={{
                  position: 'relative',
                  backgroundColor: isHovered ? 'black' : 'rgba(0, 0, 0, 0.6)', // Change to black when hovered
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  border: '2px solid transparent',
                  paddingLeft: '50px',
                  clipPath: 'polygon(0 12%, 100% 0, 100% 71%, 0 100%)',
                  boxSizing: 'border-box',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hovered state
                onMouseLeave={() => setIsHovered(false)} // Reset hovered state
              >
                <Text size="lg" mt="sm" style={{ marginLeft: '10px',  }}>
                  {isHovered && char.characters ? char.characters[currentFormIndex]?.name : char.name}
                </Text>

                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Render only the current form image */}
                  <motion.div
                    key={currentFormIndex} // Ensure unique key for animation
                    initial={{ opacity: 0 }} // Start with opacity 0
                    animate={{ opacity: 1 }} // Animate to full opacity
                    exit={{ opacity: 0 }} // Animate to opacity 0 on exit
                    transition={{ duration: 0.5 }} // Transition duration for opacity
                  >
                    <Image
                      src={char.characters ? char.characters[currentFormIndex]?.path : char.path} // Use the current form
                      alt={char.characters ? char.characters[currentFormIndex]?.name : char.name} // Change alt text accordingly
                      fit="contain"
                      style={{
                        transform: transformStyle,
                        transformOrigin: 'center',
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '400px',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform += ' translateY(-10px)'; // Lift the image on hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = transformStyle; // Reset transform on mouse leave
                      }}
                    />
                  </motion.div>
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
