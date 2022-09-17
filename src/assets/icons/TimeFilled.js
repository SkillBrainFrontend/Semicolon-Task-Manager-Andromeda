import * as React from "react";

function SvgTimeFilled(props) {
  return <svg
		fill="none"
		height={20}
		width={20}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10 0c5.53 0 10 4.48 10 10 0 5.53-4.47 10-10 10-5.52 0-10-4.47-10-10C0 4.48 4.48 0 10 0Zm-.35 4.93c-.41 0-.75.33-.75.75v5.05c0 .26.14.5.37.64l3.92 2.34a.742.742 0 0 0 1.03-.26c.21-.35.1-.81-.26-1.03L10.4 10.3V5.68c0-.42-.34-.75-.75-.75Z"
			fill="#3754DB"
		/>
	</svg>;
}

export default SvgTimeFilled;
