import { SimpleGrid } from '@mantine/core';
import CharacterCard from './CharacterCard';
import { Character } from '../../data/dbdata'; // Import the Character type

interface CharacterGridProps {
    cols: number;
    character: Character[]; // Define that character is an array of Character objects
  }

const CharacterGrid = ({ cols, character }: CharacterGridProps) => {
    return (
        <SimpleGrid cols={cols} spacing="lg" p="md">
            {character.map((char) => (
                <CharacterCard key={char.name} char={char} />
            ))}
        </SimpleGrid>
    );
};

export default CharacterGrid;
