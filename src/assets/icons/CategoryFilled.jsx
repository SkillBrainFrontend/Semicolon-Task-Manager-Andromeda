import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgCategoryFilled(props) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.92 11.47c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56H2.54C1.14 20 0 18.85 0 17.44v-3.41c0-1.42 1.14-2.56 2.54-2.56h3.38Zm11.54 0c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56h3.38ZM5.92 0c1.41 0 2.54 1.15 2.54 2.561V5.97c0 1.42-1.13 2.56-2.54 2.56H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0h3.38Zm11.54 0C18.86 0 20 1.15 20 2.561V5.97c0 1.42-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.14-2.54-2.56V2.561A2.548 2.548 0 0 1 14.08 0h3.38Z"
				fill="#3754DB"
			/>
		</Svg>
	);
}
