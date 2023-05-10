import React from "react";
import { RowWraperRow } from "./Style";

type TCenterStartEnd = "center" | "flex-end" | "flex-start";

type Props = {
  align?: TCenterStartEnd | "stretch";
  justify?: "space-between" | "space-around" | "space-evenly" | TCenterStartEnd;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  children: JSX.Element | JSX.Element[];
  className?: string;
};

function RowWraper({
  children,
  align,
  justify,
  className,
  direction = "row",
}: Props) {
  return (
    <RowWraperRow
      className={className}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
      }}
    >
      {children}
    </RowWraperRow>
  );
}

export default RowWraper;
