import { BentoGrid, BentoCard } from "../ui/bento-grid";
import { Character } from "../../data/dbdata"; // Import the Character type
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion"; // Import motion

interface CharacterGridProps {
  cols?: number; // Optional: cols can determine layout responsiveness
  characters: Character[]; // Define that characters is an array of Character objects
}

const CharacterGrid = ({ cols = 3, characters }: CharacterGridProps) => {
  return (
    <BentoGrid className={`grid-cols-${cols} gap-4 p-4`}>
      {characters.map((char) => (
        <BentoCard
          key={char.name}
          name={char.name}
          className="col-span-1 relative overflow-hidden"
          background={
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${char.path})` }}
              whileHover={{ y: -10 }} // Moves the image up by 10px on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
            />
          }
          Icon={() => <ArrowRightIcon className="h-12 w-12" />}
          description={`Fighter Type: ${char.fighter || "Unknown"}`}
          href="#"
          cta="Learn More"
        />
      ))}
    </BentoGrid>
  );
};

export default CharacterGrid;
