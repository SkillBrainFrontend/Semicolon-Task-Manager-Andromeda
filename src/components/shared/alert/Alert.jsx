import * as React from "react";

import { Typography } from "@mui/material";
import { MuiAlert } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import x from "./x.png";

import "./Alert.css";

const Alert = React.forwardRef((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function Alerta() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				borderRadius="12px"
				container
				direction="row"
				display="flex"
				justifyContent="space-between"
				margin="5px 20px"
				spacing={2}
				sx={{ width: "96%" }}
			>
				<Grid item lg={3} md={6} sm={6} xs={12}>
					<Alert
						color="info"
						justify="center"
						severity="warning"
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Info Message</p>
							<p>Some message</p>
						</Typography>
						<img alt="" src={x} />
					</Alert>
				</Grid>

				<Grid item lg={3} md={6} sm={6} xs={12}>
					<Alert
						color="success"
						severity="warning"
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Succes Message</p>
							<p>Some message</p>
						</Typography>
						<img alt="" src={x} />
					</Alert>
				</Grid>

				<Grid item lg={3} md={6} sm={6} xs={12}>
					<Alert
						color="warning"
						severity="warning"
						sx={{ borderRadius: "12px" }}
					>
						<Typography>
							<p>Warning Message</p>
							<p>Some message</p>
						</Typography>

						<img alt="" src={x} />
					</Alert>
				</Grid>

				<Grid item lg={3} md={6} sm={6} xs={12}>
					<Alert color="error" severity="warning" sx={{ borderRadius: "12px" }}>
						<Typography>
							<p>Error Message</p>
							<p>Some message</p>
						</Typography>
						<img alt="" src={x} />
					</Alert>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Alerta;
