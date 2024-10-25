import { useState, useEffect } from 'react';
import { Box, Text, Image, Modal, Tabs } from '@mantine/core';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CharacterCardProps {
    char: {
        name: string;
        path: string;
        type: string;
        characters?: { name: string; path: string }[]; // Ensure this is defined for multi-form characters
    };
}

const CharacterCard = ({ char }: CharacterCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [ref, inView] = useInView({ threshold: 0.2 });
    const [modalOpen, setModalOpen] = useState(false);

    const transformStyle = char.type === 'kid' ? 'scale(1.8) translateY(10%)' : 'scale(1.8) translateY(20%)';

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
                    clipPath: 'polygon(0 12%, 100% 0, 100% 71%, 0 100%)',
                    boxSizing: 'border-box',
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Text size="lg" mt="sm" style={{ marginLeft: '10px' }}>
                    {isHovered && char.characters ? char.characters[currentFormIndex]?.name : char.name}
                </Text>

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
                                cursor: 'pointer', // Indicate that it's clickable
                            }}
                            onClick={() => setModalOpen(true)} // Open modal on click
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform += ' translateY(-10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = transformStyle;
                            }}
                        />
                    </motion.div>
                </motion.div>
            </Box>

            {/* Modal for displaying the image with tabs */}
            <Modal
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                withCloseButton
                size="lg"
                transitionProps={{ transition: 'fade', duration: 300 }} // Use transitionProps instead
            >
                <Tabs value={currentFormIndex.toString()} onChange={(value) => setCurrentFormIndex(parseInt(value))}>
                    <Tabs.List>
                        {char.characters && char.characters.map((character, index) => (
                            <Tabs.Tab key={index} value={index.toString()}>
                                {character.name}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>

                    <Tabs.Panel value={currentFormIndex.toString()} pt="xs">
                        <Image
                            src={char.characters ? char.characters[currentFormIndex]?.path : char.path}
                            alt={char.characters ? char.characters[currentFormIndex]?.name : char.name}
                            fit="contain"
                            style={{
                                maxHeight: '80vh',
                                margin: 'auto',
                                display: 'block',
                            }}
                        />
                    </Tabs.Panel>
                </Tabs>
            </Modal>
        </>
    );
};

export default CharacterCard;
