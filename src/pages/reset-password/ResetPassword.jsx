import React from "react";

import { Box, Typography } from "@mui/material";

import { RecoverPasswordWrapper } from "../components";

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
