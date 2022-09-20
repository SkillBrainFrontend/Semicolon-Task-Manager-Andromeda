import React from "react";

import {Avatar, Stack, Typography, Button, Container } from '@mui/material';
import CardWidgetCalendar from "./CardWidgetCalendar";


function SidebarRight() {
  
return (
<Container
      sx={{
        width: '30%',
        height: '100vh',
        margin: 0,
        backgroundColor: '#FFFFFF',
        border: '5px'
      }}
      variant="rounded"
    >
          <Stack 
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}>
      <Avatar sx={{ 
        bgcolor: "black", 
        height: 100, 
        width: 100, 
        fontsize: 100,  
        }} 
        variant="rounded">
        N
      </Avatar>
      
    </Stack>
    <Stack direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}>
        <Typography variant="h6">
            Name
        </Typography>
        <Typography variant="h6">
            Email
        </Typography>
    </Stack>
    <Stack direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}>
    <Button variant="contained" href="#contained-buttons">My profile</Button>
    </Stack>
    
    <CardWidgetCalendar />
    </Container>
  </div>
);
}



export default SidebarRight;