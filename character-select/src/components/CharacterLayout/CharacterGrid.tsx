import { BentoGrid, BentoCard } from "../ui/bento-grid";
import { Character } from "../../data/dbdata"; // Import the Character type
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons"; // Icons for navigation
import { motion } from "framer-motion"; // Import motion
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { DotPattern } from "../ui/dot-pattern";
import { useState } from "react";

interface CharacterGridProps {
    cols?: number; // Optional: cols can determine layout responsiveness
    characters: Character[]; // Define that characters is an array of Character objects
}

const CharacterGrid = ({ cols = 4, characters }: CharacterGridProps) => {
    return (
        <BentoGrid className={`grid-cols-${cols} gap-4 p-4`}>
            {characters.map((char) => {
                const [ref, inView] = useInView({ threshold: 0.5 });

                // Track the currently active form (index) for each character
                const [currentIndex, setCurrentIndex] = useState(0);

                // Only include additional forms if available, fallback to default form otherwise
                const forms = char.characters?.length ? char.characters : [{ name: char.name, path: char.path }];
                const currentForm = forms[currentIndex];

                // Navigation Handlers
                const goToPrevious = () => {
                    setCurrentIndex((prevIndex) => (prevIndex === 0 ? forms.length - 1 : prevIndex - 1));
                };

                const goToNext = () => {
                    setCurrentIndex((prevIndex) => (prevIndex === forms.length - 1 ? 0 : prevIndex + 1));
                };

                return (
                    <BentoCard
                        key={char.name}
                        name={currentForm.name ?? "Unknown Name"}
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
                                        backgroundImage: `url(${currentForm.path})`,
                                        backgroundSize: char.valuation === 'Legendary Warrior' ? 'cover' : '1000px',
                                        backgroundPosition: char.type === 'kid'
                                            ? 'top 30% right 70%'
                                            : char.valuation === 'Legendary Warrior'
                                                ? 'top center'
                                                : 'top 10% right 65%',
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: inView ? 1 : 0,
                                        y: inView ? 0 : 50,
                                    }}
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        y: { duration: 0.5, stiffness: 200, damping: 25 },
                                    }}
                                />
                                {/* Navigation Arrows */}
                                {forms.length > 1 && (
                                    <div
                                        className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <button
                                            onClick={goToPrevious}
                                            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                                        >
                                            <ArrowLeftIcon className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={goToNext}
                                            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                                        >
                                            <ArrowRightIcon className="w-6 h-6" />
                                        </button>
                                    </div>
                                )}
                            </>
                        }
                        Icon={() => <ArrowRightIcon className="h-12 w-12" />}
                        description={`Fighter Type: ${char.fighter || "Unknown"}`}
                        href="https://www.youtube.com/"
                        cta="Learn More"
                    />
                );
            })}
        </BentoGrid>
    );
};

export default CharacterGrid;
