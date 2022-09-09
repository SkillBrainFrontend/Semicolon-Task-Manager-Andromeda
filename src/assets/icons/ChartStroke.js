import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChartStroke = (props) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.433 0c3.627 0 6.064 2.546 6.064 6.335v8.83c0 3.79-2.438 6.335-6.064 6.335H7.06c-3.627 0-6.064-2.546-6.064-6.335v-8.83C.996 2.546 3.433 0 7.06 0h9.373Zm0 1.5H7.06c-2.772 0-4.564 1.897-4.564 4.835v8.83C2.496 18.105 4.288 20 7.06 20h9.373c2.773 0 4.564-1.896 4.564-4.835v-8.83c0-2.938-1.791-4.835-4.564-4.835ZM7.118 8.203a.75.75 0 0 1 .75.75v6.86a.75.75 0 0 1-1.5 0v-6.86a.75.75 0 0 1 .75-.75Zm4.667-3.284a.75.75 0 0 1 .75.75v10.143a.75.75 0 0 1-1.5 0V5.669a.75.75 0 0 1 .75-.75Zm4.59 6.909a.75.75 0 0 1 .75.75v3.234a.75.75 0 0 1-1.5 0v-3.234a.75.75 0 0 1 .75-.75Z"
			fill="#3754DB"
		/>
	</Svg>
);

export default SvgChartStroke;
