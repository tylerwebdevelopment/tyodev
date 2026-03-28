import type { SVGProps } from "react";
const HeroMobileSvg = (props: SVGProps<SVGSVGElement>) => {
  const fill='currentColor';
  const width=800;
  const height=612.657;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      {...props}
    >
      <g transform="translate(-560 -230.568)">
        <path
          fill="#d6d6e3"
          d="M987.193 692.451a27.562 27.562 0 0 1-54.387 0h-69.572v150.774h193.534V692.451Z"
        />
        <path
          fill="#090814"
          d="M863.798 831.281h193.53v5.248h-193.53zM1349.211 696.392H570.789A10.8 10.8 0 0 1 560 685.603V241.358a10.8 10.8 0 0 1 10.789-10.79h778.422a10.8 10.8 0 0 1 10.789 10.79v444.245a10.8 10.8 0 0 1-10.789 10.789"
        />
        <path fill="#fff" d="M576.123 247.557h761.745v429.818H576.123z" />
        <rect
          width={721}
          height={32}
          fill={fill}
          rx={4}
          transform="translate(600 262.319)"
        />
        <rect
          width={184}
          height={24}
          fill="#e6e6e6"
          rx={12}
          transform="translate(600 381.319)"
        />
        <rect
          width={321}
          height={16}
          fill="#e6e6e6"
          rx={8}
          transform="translate(600 421.319)"
        />
        <rect
          width={321}
          height={16}
          fill="#e6e6e6"
          rx={8}
          transform="translate(600 453.319)"
        />
        <rect
          width={88}
          height={24}
          fill={fill}
          rx={12}
          transform="translate(600 485.319)"
        />
        <path
          fill="#e6e6e6"
          d="M800 565a20 20 0 1 1-20 20 20 20 0 0 1 20-20M960 565a20 20 0 1 1-20 20 20 20 0 0 1 20-20M1120 565a20 20 0 1 1-20 20 20 20 0 0 1 20-20M762 615.681h77a8 8 0 0 1 0 16h-77a8 8 0 0 1 0-16M922 615.681h77a8 8 0 0 1 0 16h-77a8 8 0 0 1 0-16M1082 615.681h77a8 8 0 0 1 0 16h-77a8 8 0 0 1 0-16M1095 642.361h50.5a8 8 0 0 1 0 16H1095a8 8 0 0 1 0-16M935 642.361h50.5a8 8 0 0 1 0 16H935a8 8 0 0 1 0-16M775 642.361h50.5a8 8 0 0 1 0 16H775a8 8 0 0 1 0-16"
        />
        <path
          fill="#f2f2f2"
          d="M1017.019 329h288.35c8.847 0 16.019 6.8 16.019 15.184v169.874c0 8.386-7.172 15.184-16.019 15.184h-288.35c-8.847.001-16.019-6.798-16.019-15.184V344.184c0-8.384 7.172-15.184 16.019-15.184"
        />
        <circle
          cx={16.694}
          cy={16.694}
          r={16.694}
          fill={fill}
          transform="translate(1105.961 397.857)"
        />
        <path
          fill="currentColor"
          d="M1232.431 461.267v.849H1089v-.888l.772-1.092 45.472-64.2a2.272 2.272 0 0 1 3.685 0l30.487 43.054 21.706-30.374a2.272 2.272 0 0 1 3.678 0l36.855 51.569Z"
        />
      </g>
    </svg>
  );
};
export default HeroMobileSvg;
