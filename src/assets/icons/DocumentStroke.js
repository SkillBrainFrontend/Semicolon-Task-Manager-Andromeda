import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDocumentStroke = (props) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 19 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.909 0c3.144 0 5.256 2.153 5.256 5.357v9.196c0 3.232-2.047 5.334-5.215 5.354l-7.693.003C2.113 19.91 0 17.757 0 14.553V5.357C0 2.124 2.047.023 5.215.004L12.908 0Zm0 1.5-7.69.004C2.893 1.518 1.5 2.958 1.5 5.357v9.196c0 2.415 1.406 3.857 3.757 3.857l7.689-.003c2.328-.014 3.72-1.456 3.72-3.854V5.357c0-2.415-1.404-3.857-3.756-3.857Zm-.193 11.974a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1 0-1.5h7.22Zm0-4.187a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1 0-1.5h7.22ZM8.251 5.11a.75.75 0 0 1 0 1.5H5.496a.75.75 0 0 1 0-1.5H8.25Z"
			fill="#3754DB"
		/>
	</Svg>
);

export default SvgDocumentStroke;
