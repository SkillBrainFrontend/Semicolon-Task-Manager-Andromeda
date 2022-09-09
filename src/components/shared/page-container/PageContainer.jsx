import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import RightSideBar from "./components/right-side-bar/RightSideBar"
import LeftContentContainer from "./components/left-content-container/LeftContentContainer"

export default function PageContainer() {
  return (
    <Box sx={{ flexGrow: 0, margin: 1, }}>
      <Grid container spacing={0} columns={12}>
        <Grid xs={9}>
          <LeftContentContainer/>
        </Grid>

        <Grid xs={3}>
            <RightSideBar/>
        </Grid>

      </Grid>
    </Box>
  );
}