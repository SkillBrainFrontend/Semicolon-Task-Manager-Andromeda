import React from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import RecoverPasswordWrapper from "../components/recoverPasswordWrapper/RecoverPasswordWrapper";

function ResetPassword() {
	return (
		<Box>
			<RecoverPasswordWrapper>
				<Typography variant="h2">Reset Password</Typography>
			</RecoverPasswordWrapper>
		</Box>
	);
}

export default ResetPassword;
