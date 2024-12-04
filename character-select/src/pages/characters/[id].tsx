import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Character from '../../data/dbdata';

const CharacterDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate(); // Hook for navigation

    if (!id) {
        return <div>Character ID not provided</div>;
    }

    const character = Character.find((char) => char.id === parseInt(id, 10)); // Ensure base 10 parsing

    if (!character) {
        return <div>Character not found</div>;
    }

    // Assuming `character.path` is relative to the `public` folder
    const imagePath = `/${character.path}`;

    // Go back function
    const handleGoBack = () => {
        navigate(-1); // This will navigate to the previous page
    };

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

            {/* Go Back Button */}
            <Button variant={'outline'}
                onClick={handleGoBack}
                style={{
                    position: 'fixed',
                    top: '20px', // Place it 20px from the top
                    left: '20px', // Place it 20px from the left
                    padding: '10px 20px',
                    zIndex: '2', // Ensure it appears above other elements
                }}
            >
                Go Back
            </Button>
        </div>
    );
};

export default CharacterDetails;
