import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'react-responsive'
import HyperText from '@/components/ui/hyper-text';
import Character from '../../data/dbdata';
import { useState } from 'react';

type CharacterType = {
    id: number;
    name: string;
    path: string;
    fighter: string;
    valuation: string;
    person: string;
    characters: { name: string; path: string }[]; // Nested character forms
};

const CharacterDetails = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        return <div>Character ID not provided</div>;
    }
    const character: CharacterType | undefined = Character.find(
        (char) => char.id === parseInt(id, 10)
    );

    if (!character) {
        return <div>Character not found</div>;
    }

    // Ensure characters array exists, fallback to an empty array
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const forms = character.characters ?? []; // Default to an empty array
    const currentForm = forms[currentFormIndex] || character; // Fallback to the main character

    const imagePath = `/${currentForm.path}`;

    // Go back function
    const handleGoBack = () => {
        navigate(-1);
    };

    // Function to go to the next form
    const handleNextForm = () => {
        setCurrentFormIndex((prevIndex) => (prevIndex + 1) % forms.length);
    };

    // Function to go to the previous form
    const handlePrevForm = () => {
        setCurrentFormIndex((prevIndex) => (prevIndex - 1 + forms.length) % forms.length);
    };

    return (
        <div className="grid grid-cols-3 gap-4 overscroll-none">
            {/* Background image container */}
            <div
                className="row-span-1 col-span-2 parallax-container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                }}
            >
                <div>
                    <img
                        style={{
                            position: 'fixed',
                            transform: 'translate(-25%, -5%)',
                            width: '80%',
                            height: 'auto',
                            zIndex: '-1',
                            opacity: 0,
                            transition: 'opacity 1s ease-in-out 0.5s',
                        }}
                        src={imagePath}
                        alt={currentForm.name}
                        onLoad={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.opacity = '1';
                        }}
                    />
                    </div>
                <div
                    style={{
                        marginTop: '150px',
                        transform: 'translateY(-50%)',
                        color: 'white',
                    }}
                >
                    <HyperText className="2xl:text-4xl text-2xl font-bold" text={currentForm.name} />
                </div>

            </div>

            {/* Navigation Arrows */}
            {forms.length > 1 && (
                <>
                    <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handlePrevForm}
                        style={{
                            zIndex: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    >
                        &lt;
                    </div>

                    <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleNextForm}
                        style={{
                            zIndex: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '10px',
                            borderRadius: '50%',
                        }}
                    >
                        &gt;
                    </div>
                </>
            )}

            {/* Go Back Button */}
            <Button
                variant={'outline'}
                onClick={handleGoBack}
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    zIndex: '2',
                }}
            >
                Go Back
            </Button>
        </div>
    );
};

export default CharacterDetails;
