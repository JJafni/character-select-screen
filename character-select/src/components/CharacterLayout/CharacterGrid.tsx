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

const CharacterGrid = ({ cols = 3, characters }: CharacterGridProps) => {
    return (
        <BentoGrid className={`grid-cols-${cols} gap-4 p-4`}>

            {characters.map((char) => {
                const [ref, inView] = useInView({ threshold: 0.5 });

                return (
                    <BentoCard
                        key={char.name}
                        name={char.name}
                        className="col-span-1 row-span-2 relative overflow-hidden group" // Added 'row-span-2' for vertical spanning
                        background={
                            <>
                                <DotPattern
                                    className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                                    )}
                                />
                                <motion.div
                                    ref={ref}
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:contrast-[1.2]"
                                    style={{ backgroundImage: `url(${char.path})` }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: inView ? 1 : 0,
                                        y: inView ? 0 : 50
                                    }}
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        y: { duration: 0.5, stiffness: 200, damping: 25 }
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


