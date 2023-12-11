import React from "react";
import Link from "next/link";

export default function Button(btnSlug, btnText) {
  return (
    <div>
      <Link href={"/" + btnSlug}>
        <button className="min-w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
          {btnText}
        </button>
      </Link>
    </div>
  );
}
