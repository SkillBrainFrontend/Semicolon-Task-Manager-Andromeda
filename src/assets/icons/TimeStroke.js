import * as React from "react";

const SvgTimeStroke = (props) => (
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
			d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2Zm0 1.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5Zm-.339 3.595a.75.75 0 0 1 .75.75v4.422l3.405 2.03a.752.752 0 0 1-.769 1.29l-3.77-2.249a.755.755 0 0 1-.366-.645V7.845a.75.75 0 0 1 .75-.75Z"
			fill="#3754DB"
		/>
	</svg>
);

export default SvgTimeStroke;
