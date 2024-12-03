import { useState } from 'react';
import { Character } from "../../data/dbdata"; // Import the Character type
import ImgCharacterData from "../../data/dbdata"; // Import the data array
import { HyperTextDemo } from "./HyperText"; // Reintroducing your HyperTextDemo component

const Hero = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    const getRandomCharacter = (characters: Character[]): Character => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    };

    const handleRandomize = () => {
        const randomCharacter = getRandomCharacter(ImgCharacterData);
        setSelectedCharacter(randomCharacter);
    };

    return (
        <div
            style={{
                margin: '0',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, #102a63, #000000)',
                color: 'white',
                padding: '20px',
            }}
        >
            {/* Left: HyperTextDemo */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <HyperTextDemo />
            </div>

            {/* Right: Randomizer */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                {/* <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Character Randomizer</h1> */}
                <button
                    onClick={handleRandomize}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: '#1e90ff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                    }}
                >
                    Show Random Character
                </button>

                {selectedCharacter && (
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={selectedCharacter.path}
                            alt={selectedCharacter.name}
                            style={{
                                width: '600px',
                                height: '600px',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                marginBottom: '20px',
                            }}
                        />
                        <h2 style={{ fontSize: '1.5rem' }}>{selectedCharacter.name}</h2>
                        {selectedCharacter.fighter && <p>Fighter: {selectedCharacter.fighter}</p>}
                        {selectedCharacter.valuation && <p>Valuation: {selectedCharacter.valuation}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export { Hero };
