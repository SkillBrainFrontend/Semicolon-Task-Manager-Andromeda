import * as React from "react";

const SvgAlertCircle = (props) => (
	<svg
		width={48}
		height={48}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24Z"
			fill="#000"
			fillOpacity={0.05}
		/>
		<path
			d="M24 33a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
			fill="#000"
			fillOpacity={0.05}
		/>
		<path
			d="M24 33a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM24 20.4V24M24 27.6h.009"
			stroke="#16171D"
			strokeWidth={1.4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default SvgAlertCircle;
