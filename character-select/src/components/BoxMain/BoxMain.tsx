

import React from 'react';


const BoxMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                minHeight: '100vh',
                width: '100vw',
                overflowY: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            {children}
        </div>
    );
};

export { BoxMain };
