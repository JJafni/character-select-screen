import { useState, useEffect } from 'react';
import { Box, Text, Image, Modal, Tabs, FloatingIndicator } from '@mantine/core';
import styles from './Card.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CharacterCardProps {
  char: {
    name: string;
    path: string;
    type: string;
    characters?: { name: string; path: string }[];
    fighter?: string;
  };
}

const CharacterCard = ({ char }: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [modalOpen, setModalOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const transformStyle = char.type === 'kid' ? 'scale(1.8) translateY(10%)' : 'scale(1.8) translateY(20%)';
  const fightingStyle = char.fighter === 'Z Fighter' ? 'visible' : 'hidden';

  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isHovered) {
      timer = setInterval(() => {
        setCurrentFormIndex((prevIndex) => {
          if (char.characters && prevIndex + 1 < char.characters.length) {
            return prevIndex + 1;
          }
          return prevIndex;
        });
      }, 2500);
    } else {
      clearInterval(timer);
      setCurrentFormIndex(0);
    }

    return () => clearInterval(timer);
  }, [isHovered, char.characters]);

  const handleImageClick = () => {
    setIsFadingOut(true); // Trigger fade-out
    setTimeout(() => {
      setModalOpen(true); // Open modal after delay
    }, 300);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setIsFadingOut(false); // Reset fade-out state after the modal closes
    }, 300);
  };

  return (
    <>
      <Box
        key={char.name}
        style={{
          position: 'relative',
          backgroundColor: isHovered ? 'black' : 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          boxShadow: isHovered ? 'rgba(255, 255, 255, 0.3) 0px 18px 36px -18px inset' : 'none',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          paddingLeft: '50px',
          // clipPath: 'polygon(0 12%, 100% 0, 100% 71%, 0 100%)',
          boxSizing: 'border-box',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          // visibility: fightingStyle,  // Add this line
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animate the text element */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isFadingOut ? 0 : 1, y: isFadingOut ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isFadingOut ? 'none' : 'auto', marginLeft: '10px' }}
        >
          <Text size="lg" mt="sm">
            {isHovered && char.characters ? char.characters[currentFormIndex]?.name : char.name}
          </Text>
        </motion.div>

        {/* Animate the image element */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key={currentFormIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: isFadingOut ? 0 : 1, y: isFadingOut ? 20 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: isFadingOut ? 'none' : 'auto' }}
            >
              <Image
                src={char.characters ? char.characters[currentFormIndex]?.path : char.path}
                alt={char.characters ? char.characters[currentFormIndex]?.name : char.name}
                fit="contain"
                style={{
                  transform: transformStyle,
                  transformOrigin: 'center',
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '400px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={handleImageClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform += ' translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = transformStyle;
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>

      {/* Modal with Tabs */}
      <Modal
        opened={modalOpen}
        onClose={handleCloseModal}
        withCloseButton={false}
        size="80%"
        transitionProps={{
          transition: 'fade-down', // Change to fade-down transition
          duration: 300,
        }}            >
        <Tabs
          variant="none"
          value={currentFormIndex.toString()}
          onChange={(value) => {
            if (value !== null) {
              setCurrentFormIndex(parseInt(value));
            }
          }}
        >
          <Tabs.List ref={setRootRef} className={styles.list}>
            {char.characters &&
              char.characters.map((character, index) => (
                <Tabs.Tab
                  key={index}
                  value={index.toString()}
                  ref={setControlRef(index.toString())}
                  className={styles.tab}
                >
                  {character.name}
                </Tabs.Tab>
              ))}

            <FloatingIndicator
              target={controlsRefs[currentFormIndex.toString()]}
              parent={rootRef}
              className={styles.indicator}
            />
          </Tabs.List>

          <Tabs.Panel value={currentFormIndex.toString()} pt="xs">
            <motion.div
              key={currentFormIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                style={{
                  height: '80vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  style={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={char.characters ? char.characters[currentFormIndex]?.path : char.path}
                    alt={char.characters ? char.characters[currentFormIndex]?.name : char.name}
                    fit="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '80vh',
                    }}
                  />
                </Box>
                <Box
                  style={{
                    width: '50%',
                    padding: '20px',
                    color: 'white',
                  }}
                >
                  <Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Character Information
                  </Text>
                  <Text style={{ fontSize: '1rem' }}>
                    {/* {char.characters
                      ? char.characters[currentFormIndex]?.description
                      : char.description} */}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
};

export default CharacterCard;
