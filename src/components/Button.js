import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <div>
      <Link href={"/" + props.btnSlug}>
        <button className="min-w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
          {props.btnText}
        </button>
      </Link>
    </div>
  );
}
