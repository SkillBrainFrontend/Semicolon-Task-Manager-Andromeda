import React from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import RecoverPasswordWrapper from "../components/recoverPasswordWrapper/RecoverPasswordWrapper";

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
