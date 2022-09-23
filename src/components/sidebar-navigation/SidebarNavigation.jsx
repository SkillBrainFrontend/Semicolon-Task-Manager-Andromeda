import React from "react";
import PropTypes from "prop-types";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";

function SidebarNavigation(props) {
	const { isOpen } = props;
	return (
		<List>
			{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
				<ListItem disablePadding key={text} sx={{ display: "block" }}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: isOpen ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: isOpen ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
}

export default SidebarNavigation;

SidebarNavigation.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};
