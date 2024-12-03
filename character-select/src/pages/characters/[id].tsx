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
        <div className="character-details">
            <h1>{character.name}</h1>
            <p>Valuation: {character.valuation}</p>
            <p>Type: {character.type}</p>
            <p>Description: {character.name}</p> {/* Use a proper description field */}
            <img src={imagePath} alt={character.name} /> {/* Correct image source */}
        </div>
    );
};

export default CharacterDetails;
