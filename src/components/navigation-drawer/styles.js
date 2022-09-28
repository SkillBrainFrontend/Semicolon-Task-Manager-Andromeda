export const navigationListItemStyles = ({ isOpen, selected }) => ({
	listItemButton: {
		minHeight: 50,
		justifyContent: isOpen ? "initial" : "center",
		px: 2.5,
		width: "100%",
	},
	listItemIcon: (t) => ({
		minWidth: 0,
		mr: isOpen ? 1 : "auto",
		justifyContent: "center",
		color: t.palette.primary.main,
	}),
	listItemText: {
		opacity: isOpen ? 1 : 0,
		color: (theme) => (selected ? theme.palette.primary.main : "text.primary"),
	},
});
