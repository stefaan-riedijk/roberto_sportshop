import React from 'react'
import Link from 'next/link'

export default function Button( props ) {
  return (
    <div>
        <Link href={"/" + props.btnSlug}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {props.btnText}
            </button>
        </Link>
    </div>
  )
}