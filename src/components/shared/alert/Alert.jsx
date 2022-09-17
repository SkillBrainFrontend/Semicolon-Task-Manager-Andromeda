import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import x from "./x.png";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Alerta() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}
				sx={{ width: "96%" }}
				display={"flex"}
				direction={"row"}
				justifyContent={"space-between"}
				margin={"5px 20px"}
				borderRadius={"12px"}
			>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Alert
						severity="warning"
						color={"info"}
						justify={"center"}
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Info Message</p>
							<p>Some message</p>
						</Typography>
						<img src={x} alt="" />
					</Alert>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Alert
						severity="warning"
						color={"success"}
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Succes Message</p>
							<p>Some message</p>
						</Typography>
						<img src={x} alt="" />
					</Alert>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Alert
						severity="warning"
						color={"warning"}
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Warning Message</p>
							<p>Some message</p>
						</Typography>

						<img src={x} alt="" />
					</Alert>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Alert
						severity="warning"
						color={"error"}
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Error Message</p>
							<p>Some message</p>
						</Typography>
						<img src={x} alt="" />
					</Alert>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Alerta;
