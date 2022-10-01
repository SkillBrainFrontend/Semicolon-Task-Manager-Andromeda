import * as React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import {
	Box,
	Button,
	Container,
	DialogActions,
	Menu,
	MenuItem,
	TextField,
	unstable_useId as useId,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
	useLocaleText,
	WrapperVariantContext,
} from "@mui/x-date-pickers/internals";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import { CustomActionBa } from "../../shared";

function CustomActionBar(props) {
	const { onAccept, onClear, onCancel, onSetToday, actions } = props;
	const wrapperVariant = React.useContext(WrapperVariantContext);
	const localeText = useLocaleText();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const id = useId();

	const actionsArray =
		typeof actions === "function" ? actions(wrapperVariant) : actions;

	if (actionsArray == null || actionsArray.length === 0) {
		return null;
	}

	const menuItems = actionsArray?.map((actionType) => {
		switch (actionType) {
			case "clear":
				return (
					<MenuItem
						data-mui-test="clear-action-button"
						key={actionType}
						onClick={() => {
							onClear();
							setAnchorEl(null);
						}}
					>
						{localeText.clearButtonLabel}
					</MenuItem>
				);

			case "cancel":
				return (
					<MenuItem
						key={actionType}
						onClick={() => {
							setAnchorEl(null);
							onCancel();
						}}
					>
						{localeText.cancelButtonLabel}
					</MenuItem>
				);

			case "accept":
				return (
					<MenuItem
						key={actionType}
						onClick={() => {
							setAnchorEl(null);
							onAccept();
						}}
					>
						{localeText.okButtonLabel}
					</MenuItem>
				);

			case "today":
				return (
					<MenuItem
						data-mui-test="today-action-button"
						key={actionType}
						onClick={() => {
							setAnchorEl(null);
							onSetToday();
						}}
					>
						{localeText.todayButtonLabel}
					</MenuItem>
				);

			default:
				return null;
		}
	});

	return (
		<DialogActions>
			<Button
				aria-controls={open ? "basic-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				id={`picker-actions-${id}`}
				onClick={(event) => setAnchorEl(event.currentTarget)}
			>
				Actions
			</Button>
			<Menu
				anchorEl={anchorEl}
				id="basic-menu"
				onClose={() => setAnchorEl(null)}
				open={open}
				MenuListProps={{
					"aria-labelledby": `picker-actions-${id}`,
				}}
			>
				{menuItems}
			</Menu>
		</DialogActions>
	);
}

export default function ActionBarComponent() {
	const [value, setValue] = React.useState(() => dayjs("2022-02-01T00:00"));

	return (
		<Container>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<CustomActionBa>
					<StaticDatePicker
						onChange={(newValue) => setValue(newValue)}
						renderInput={(params) => <TextField {...params} />}
						value={value}
						components={{
							ActionBar: CustomActionBar,
						}}
						componentsProps={{
							actionBar: {
								actions: ["today"],
							},
						}}
					/>
				</CustomActionBa>
			</LocalizationProvider>
		</Container>
	);
}

CustomActionBar.propTypes = {
	/**
	 * Ordered array of actions to display.
	 * If empty, does not display that action bar.
	 * @default `['cancel', 'accept']` for mobile and `[]` for desktop
	 */
	actions: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOf(["accept", "cancel", "clear", "today"])),
		PropTypes.func,
	]),
	onAccept: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired,
	onSetToday: PropTypes.func.isRequired,
};
