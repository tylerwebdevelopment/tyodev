import * as React from "react";
import type { SVGProps } from "react";
const LineArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 77.913 399.304"
    {...props}
  >
    <path
      d="m43.127 392.212 20.552-40.858c.935-1.858-.416-4.05-2.496-4.05H20.078c-2.08 0-3.43 2.192-2.496 4.05l20.553 40.858c1.032 2.051 3.96 2.051 4.992 0Z"
      style={{
        stroke: "none",
        fill: "currentColor",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M40.63 347.304 38.956 0"
      style={{
        fill: "none",
        stroke: "lightgray",
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);
export default LineArrow;
