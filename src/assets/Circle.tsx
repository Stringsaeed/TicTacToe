import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function CircleIcon({ pathFill, ...props }: SvgProps & { pathFill?: string }) {
  return (
    <Svg
      width={233.514}
      height={233.514}
      viewBox="0 0 233.514 233.514"
      {...props}
    >
      <Path
        d="M123.931.618c-1.224 0-2.447.612-3.061 1.836C60.894-6.115 8.263 41.009.917 100.374c-7.956 62.424 36.72 122.399 99.144 131.58 59.978 9.181 123.013-32.437 132.192-93.636 9.794-62.424-38.555-143.82-108.322-137.7zm96.084 146.268c-14.075 52.632-74.052 85.681-126.072 73.439-51.408-11.628-87.516-58.752-85.68-111.384C10.71 47.742 62.119 6.125 120.87 5.514c.612.612 1.225 1.224 3.061 1.224 65.483 2.448 112.608 78.948 96.084 140.148z"
        fill={pathFill || "#000000"}
      />
      <Path
        d="M123.931 29.994c-1.224 0-1.836 0-2.447.612C18.667 15.306 5.203 194.01 108.63 211.146c115.057 18.971 118.728-176.869 15.301-181.152zm-27.54 166.463c-34.272-12.852-53.856-47.735-51.408-83.843 1.224-18.36 9.18-39.168 21.42-52.632C81.09 44.069 99.451 39.786 119.647 37.95c.611 1.224 1.836 1.836 3.672 2.448 47.124 4.284 67.319 59.976 63.647 101.592-3.06 43.451-48.959 70.379-90.575 54.467z"
        fill={pathFill || "#000000"}
      />
    </Svg>
  );
}

const MemoCircleIcon = React.memo(CircleIcon);
export default MemoCircleIcon;
