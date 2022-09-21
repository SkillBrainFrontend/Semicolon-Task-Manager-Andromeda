import React from "react"
import { Container, Box, FormControl, InputLabel, Alert } from '@mui/material';

export default function ForgotPass() {
    const EmailInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
          border: '1px solid #ced4da',
          fontSize: 16,
          width: 'auto',
          padding: '10px 12px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
        }
    return (
    <div> 
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Typography gutterBottom variant="h5">
                Forgot Password?
            </Typography>
            <Typography gutterBottom variant="body1">
                We are sorry to hear that happen. Don't be sad, we could help you get back to your productivity
            </Typography>
            <FormControl variant="standard">
                <InputLabel shrink htmlFor="email-input">
                    Email
                </InputLabel>
                <EmailInput  id="email-input" />
            </FormControl>
            < Button variant="contained" size="large">
                Next
            </Button>
        </Container>
        <Alert></Alert>
    </div>
    );
  }