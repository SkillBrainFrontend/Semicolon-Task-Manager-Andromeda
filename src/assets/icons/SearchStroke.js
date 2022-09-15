import * as React from "react";

const SvgSearchStroke = (props) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.739 2c5.37 0 9.738 4.368 9.738 9.738a9.703 9.703 0 0 1-2.564 6.579l3.131 3.124a.749.749 0 1 1-1.06 1.062l-3.168-3.16a9.69 9.69 0 0 1-6.077 2.134c-5.37 0-9.74-4.369-9.74-9.739C2 6.368 6.37 2 11.74 2Zm0 1.5c-4.543 0-8.24 3.695-8.24 8.238 0 4.543 3.697 8.239 8.24 8.239 4.542 0 8.238-3.696 8.238-8.239 0-4.543-3.696-8.238-8.238-8.238Z"
			fill="#3754DB"
		/>
	</svg>
);

export default SvgSearchStroke;
