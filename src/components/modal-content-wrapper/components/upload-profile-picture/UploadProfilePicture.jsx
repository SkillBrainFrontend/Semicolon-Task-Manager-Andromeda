import React from "react";
import { useDispatch } from "react-redux";

import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import PlaceholderProfilePicture from "../../../../assets/images/placeholder_image.png";
import { uploadProfilePicture } from "../../../../store/user/user.slice";
import { Button } from "../../../shared";

export default function UploadProfilePicture() {
	const [imageSrc, setImageSrc] = React.useState(PlaceholderProfilePicture);
	const [rawImage, setRawImage] = React.useState();
	const imageInputRef = React.useRef();
	const dispatch = useDispatch();

	const onImageLoad = (e) => {
		const newImage = e.target.files[0];
		const newImageSrc = URL.createObjectURL(newImage);
		setRawImage(e.target.files[0]);
		setImageSrc(newImageSrc);
	};

	const openFileUploadWindow = () => {
		if (imageInputRef) {
			imageInputRef.current.click();
		}
	};

	const handleUpload = () => {
		console.log("BINE MA");
		dispatch(uploadProfilePicture({ image: rawImage }));
	};

	return (
		<Box sx={{ padding: "55px", paddingTop: 0 }}>
			<Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
				Change your Profile Picture
			</Typography>
			<Box
				sx={{
					padding: "20px 0",
				}}
			>
				<Typography component="p" sx={{ color: "#636363" }} variant="caption">
					Tap Icon to Select Picture{" "}
				</Typography>
				<Stack
					alignItems="center"
					justifyContent="center"
					sx={{ position: "relative" }}
				>
					<img
						alt="PlaceholderProfilePicture"
						src={imageSrc}
						style={{
							borderRadius: "25px",
							margin: "auto",
							width: "100%",
						}}
					/>
					<input
						accept="image/png, image/jpeg, image/gif"
						onChange={onImageLoad}
						ref={imageInputRef}
						type="file"
						style={{
							visibility: "hidden",
						}}
					/>
					<Button
						color="primary"
						onClick={openFileUploadWindow}
						size="small"
						variant="contained"
						sx={{
							position: "absolute",
							bottom: "10%",
						}}
					>
						Tap Icon to Change Picture
					</Button>
				</Stack>
			</Box>
			<Button
				fullWidth
				onClick={handleUpload}
				variant="contained"
				sx={{
					margin: "20px 0",
				}}
			>
				Upload Image
			</Button>
		</Box>
	);
}
