import { BentoGrid, BentoCard } from "../ui/bento-grid";
import { Character } from "../../data/dbdata"; // Import the Character type
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion"; // Import motion
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { DotPattern } from "../ui/dot-pattern";



interface CharacterGridProps {
    cols?: number; // Optional: cols can determine layout responsiveness
    characters: Character[]; // Define that characters is an array of Character objects
}

const CharacterGrid = ({ cols = 4, characters }: CharacterGridProps) => {
    return (
        <BentoGrid className={`grid-cols-${cols} gap-4 p-4`}>

            {characters.map((char) => {
                const [ref, inView] = useInView({ threshold: 0.5 });

                return (
                    <BentoCard
                        key={char.name}
                        name={char.name ?? "Unknown Name"}
                        valuation={char.valuation ?? "Unknown Valuation"}
                        className={`col-span-1 ${char.valuation === 'Legendary Warrior' ? 'row-span-2' : 'row-span-1'} relative overflow-hidden group`}
                        background={
                            <>
                                <DotPattern
                                    className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                                    )}
                                />
                                <motion.div
                                    ref={ref}
                                    className="absolute inset-0 bg-no-repeat transition-all duration-300 group-hover:contrast-[1.2]"
                                    style={{
                                        backgroundImage: `url(${char.path})`,
                                        backgroundSize: char.valuation === 'Legendary Warrior' ? 'cover' : '1000px',
                                        // backgroundPosition: '', // Ensures the top part of the image is always visible
                                        backgroundPosition: char.type === 'kid' 
                                        ? 'center left 30%' 
                                        : char.valuation === 'Legendary Warrior' 
                                            ? 'top center' // Custom position for legendary warriors
                                            : 'top 10% right 65%',
                                    
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: inView ? 1 : 0,
                                        y: inView ? 0 : 50, // No conditional position shifts for simplicity
                                    }}
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        y: { duration: 0.5, stiffness: 200, damping: 25 },
                                    }}
                                >
                                </motion.div>


                            </>
                        }
                        Icon={() => <ArrowRightIcon className="h-12 w-12" />}
                        description={`Fighter Type: ${char.fighter || "Unknown"}`}
                        href="#"
                        cta="Learn More"
                    />
                );
            })}
        </BentoGrid>
    );
};

export default CharacterGrid;


