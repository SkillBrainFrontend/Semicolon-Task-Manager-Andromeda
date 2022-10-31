import * as React from "react";

function SvgUserFilled(props) {
	return (
		<svg
			fill="none"
			height={24}
			width={24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 15.174c4.339 0 8 .705 8 3.425C20 21.32 16.315 22 12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401ZM12 2a5.273 5.273 0 0 1 5.294 5.291A5.274 5.274 0 0 1 12 12.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12 2Z"
				fill="#3754DB"
			/>
		</svg>
	);
}

export default SvgUserFilled;
