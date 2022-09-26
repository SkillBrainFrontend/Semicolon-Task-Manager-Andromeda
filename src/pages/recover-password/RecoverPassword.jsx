import React from "react";

import { Box, Typography } from "@mui/material";

import { RecoverPasswordWrapper } from "../components";

function RecoverPassword() {
	return (
		<Box>
			<RecoverPasswordWrapper>
				<Typography variant="h3">Recover password</Typography>
			</RecoverPasswordWrapper>
		</Box>
	);
}

export default RecoverPassword;
