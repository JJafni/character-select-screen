import { Box } from '@mantine/core';
import React from 'react';


const BoxMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            style={{
                minHeight: '100vh',
                width: '100vw',
                overflowY: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
            mx="auto"
        >
            {children}
        </Box>
    );
};

export { BoxMain };
