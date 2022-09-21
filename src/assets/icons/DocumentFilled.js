import * as React from "react";

function SvgDocumentFilled(props) {
  return <svg
		fill="none"
		height={20}
		width={18}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13.191 0C16.28 0 18 1.78 18 4.83v10.33c0 3.1-1.72 4.84-4.809 4.84H4.81C1.77 20 0 18.26 0 15.16V4.83C0 1.78 1.77 0 4.81 0h8.381ZM5.08 13.74a.795.795 0 0 0-.75 1.21c.16.25.45.4.75.36h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79H5.08Zm7.84-4.561H5.08a.781.781 0 0 0 0 1.561h7.84a.781.781 0 0 0 0-1.561ZM8.069 4.65H5.08v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779Z"
			fill="#3754DB"
		/>
	</svg>;
}

export default SvgDocumentFilled;
