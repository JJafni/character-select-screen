import React from 'react';
import Box from '@mui/material/Box';

// Example: 30 character slots (adjust as necessary)
const characters = Array(30).fill(null); // Placeholder for characters

const Background: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 0,
        border: '1px solid grey',
        borderRadius: 8,
        borderWidth: 2,
        width: '500px',  // Width of the select screen
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevent overflow of character slots
      }}
    >
      {/* Inner Box to contain the grid of character slots */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2} // Space between character slots
        sx={{
          p: 0, // Optional padding inside the inner box
          height: '100%', // Fill the height of the outer box
          overflowY: 'auto', // Enable vertical scrolling
          maxHeight: '650px', // Set max height to allow for scrolling
        }}
      >
        {characters.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '80px',   // Size of each character slot
              height: '120px', // Size of each character slot
              border: '1px solid', // Thinner border for each slot
              borderRadius: 3, // Rounded corners
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
   <img
              src={`https://via.placeholder.com/80x120.png?text=Character+${index + 1}`} // Test image URL
              alt={`Character ${index + 1}`} // Accessibility text
              style={{
                width: '100%',    // Make image fill the slot
                height: '100%',   // Maintain aspect ratio
                objectFit: 'cover', // Cover the entire box
                borderRadius: '12px',
              }}
            />          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { Background };
