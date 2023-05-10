import React from "react";
import { WrapperStyle } from "./Style";

type TCenterStartEnd = "center" | "flex-end" | "flex-start";

type Props = {
  align?: TCenterStartEnd | "stretch";
  justify?: "space-between" | "space-around" | "space-evenly" | TCenterStartEnd;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  children: JSX.Element | JSX.Element[];
  className?: string;

};

function Wrapper({
  children,
  align,
  justify,
  className,
  direction = "row",
}: Props) {
  return (
    <WrapperStyle
      className={className}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
      }}
    >
      {children}
    </WrapperStyle>
  );
}

export default Wrapper;
