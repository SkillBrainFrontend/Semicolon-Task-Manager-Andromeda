import React from "react";
import PropTypes from "prop-types";

import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from "@mui/material";

import { navigationListItemStyles } from "./styles";

function NavigationListItem(props) {
	const { text, icon, isOpen, selected, link } = props;

	const styles = navigationListItemStyles({ isOpen, selected });

	return (
		<ListItem disablePadding key={text} sx={{ display: "block" }}>
			<Tooltip
				arrow
				disableHoverListener={isOpen}
				disableInteractive
				placement="left"
				title={text}
			>
				<ListItemButton href={link} sx={styles.listItemButton}>
					<ListItemIcon sx={styles.listItemIcon}>
						{selected ? icon.selected : icon.base}
					</ListItemIcon>
					<ListItemText
						primary={text}
						sx={styles.listItemText}
						primaryTypographyProps={{
							sx: {
								fontWeight: selected ? 700 : 400,
							},
						}}
					/>
				</ListItemButton>
			</Tooltip>
		</ListItem>
	);
}

NavigationListItem.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.shape({
		selected: PropTypes.node,
		base: PropTypes.node,
	}),
	isOpen: PropTypes.bool.isRequired,
	selected: PropTypes.bool,
	link: PropTypes.string.isRequired,
};

export default NavigationListItem;
