import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: 'grey', // Default text color when not focused
  },
  '& .MuiInputBase-root.Mui-focused': {
    color: 'red', // Text color when focused
  },
  '& .MuiInputLabel-root': {
    color: 'grey', // Default label color when not focused
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'red', // Label color when focused
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey', // Default border color when not focused
    },
    '&:hover fieldset': {
      borderColor: 'grey', // Border color on hover when not focused
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red', // Border color when focused
    },
  },
}));

export default function InputComponent() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <StyledTextField
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        InputProps={{
          style: {
            height: '40px', // Adjust the height here
            
          },
        }}
      />
    </Box>
  );
}
