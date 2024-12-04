import { useParams } from 'react-router-dom';
import Character from '../../data/dbdata';

const CharacterDetails = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>Character ID not provided</div>;
    }

    const character = Character.find((char) => char.id === parseInt(id, 10)); // Ensure base 10 parsing

    if (!character) {
        return <div>Character not found</div>;
    }

    // Assuming `character.path` is relative to the `public` folder
    const imagePath = `/${character.path}`;

    return (
        <div className="grid grid-cols-3 gap-4 overscroll-none">
            {/* Background image container */}
            <div
                className="row-span-1 col-span-2 parallax-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto', // Make the height of the container match the viewport height
                    overflow: 'hidden',
                }}
            >
                <img
                    style={{
                        position: 'fixed', // Keep the image fixed in place
                        transform: 'translate(-25%, -5%)', // Center the image
                        width: '80%',
                        height: 'auto', // Match the viewport height
                        zIndex: '-1', // Ensure the image is in the background
                    }}
                    src={imagePath}
                    alt={character.name}
                />
            </div>

            {/* Character Details */}
            <div
                className="row-span-2 col-span-1"
                style={{
                    border: 'solid white 1px',
                    position: 'absolute',
                    right: '30%',
                    padding: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                    color: 'white',
                    zIndex: '1', // Ensure content is above the background
                }}
            >
                <h1>{character.name}</h1>
                <p>Valuation: {character.valuation}</p>
                <p>Type: {character.type}</p>
                <p>Description: {character.name}</p> {/* Use a proper description field */}
            </div>
        </div>
    );
};

export default CharacterDetails;
