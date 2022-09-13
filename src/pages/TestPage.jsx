import React, { useState } from "react";
import {
	Container,
	Paper,
	Typography,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Button from "../components/shared/button/Button";
import Input from "../components/shared/Input";

function Test() {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div>
			<Container
				sx={{
					border: theme.palette.primary.main,
				}}
			>
				<Paper>
					<Typography variant="h1" gutterBottom>
						h1. Heading
					</Typography>
				</Paper>
				<Typography variant="h2" gutterBottom>
					h2. Heading
				</Typography>
				<Typography variant="h3" gutterBottom>
					h3. Heading
				</Typography>
				<Typography variant="h4" gutterBottom>
					h4. Heading
				</Typography>
				<Typography variant="h5" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="h6" gutterBottom>
					h6. Heading
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant="body1" gutterBottom>
					body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="body2" gutterBottom>
					body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
				<Typography variant="caption" display="block" gutterBottom>
					caption text
				</Typography>
				<Typography variant="overline" display="block" gutterBottom>
					overline text
				</Typography>
				<Button sx={{ width: 190 }} size="large" variant="contained">
					Test
				</Button>
				<Button size="medium" variant="link">
					Test
				</Button>
				<Button disabled size="small" variant="contained">
					Test
				</Button>

				<Input />
				<Input disabled />
				<Input error="true" />
				<Input
					type="password"
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword((prev) => !prev)}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Container>
		</div>
	);
}

export default Test;
