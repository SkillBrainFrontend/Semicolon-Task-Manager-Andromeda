import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FormDataContainer from './components/form-data-container/FormDataContainer';
import ContentContainer from './components/content-container/ContentContainer';

export default function RegisterContainer() {
  return (
    <Box sx={{ flexGrow: 0, margin: 1, }}>
      <Grid container spacing={0} columns={12}>
        <Grid xs={6}>
          <ContentContainer/>
        </Grid>

        <Grid xs={6}>
            <FormDataContainer/>
        </Grid>

      </Grid>
    </Box>
  );
}