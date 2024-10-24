import { Box } from '@mantine/core';
import React from 'react';

const BoxMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            style={{
                minHeight: '100vh',
                width: '100vw',
                overflowY: 'auto',
                backgroundImage: 'url(https://i.ibb.co/KF3tpzt/db.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)',
            }}
            mx="auto"
        >
            {children}
        </Box>
    );
};

export { BoxMain };
