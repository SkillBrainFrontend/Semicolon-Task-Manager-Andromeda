import * as React from 'react';

import { Chip } from '@mui/material/';
import { createTheme, ThemeProvider  } from '@mui/material/styles';


const defaultTheme = createTheme();

const theme = createTheme({
	components: {
		MuiChip: {
			variants: [
				{
					props: { variant: 'accent'},
					style: {
						padding: 0,
						background:defaultTheme.palette.normal.main,
						color: defaultTheme.palette.primary.main,
									}
				}
			]
		}
	}
});

function styleBadges() {
	return (
		<ThemeProvider theme={theme}>
			<Chip label="Some Text Yunno" variant="accent"/>
		</ThemeProvider>
		
	);
}

export default styleBadges;