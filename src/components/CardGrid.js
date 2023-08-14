import React from "react";

export function CardGrid(props) {
  return (
    <div className="container mx-auto my-10 grid h-full grid-cols-2 grid-rows-3 space-x-3 space-y-4 rounded-xl border-2 px-4 py-4 lg:grid-cols-3">
      {props.children}
    </div>
  );
}

export default CardGrid;
