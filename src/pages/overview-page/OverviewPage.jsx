import React from "react";

import { Box } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";
import { GlobalSearchBar } from "../../components/shared";

import QuoteOfTheDay from "./components/QuoteOfTheDay";

function OverviewPage() {
	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			<GlobalSearchBar />
			<QuoteOfTheDay />
		</Box>
	);
}

export default withNavigationDrawer(OverviewPage);
