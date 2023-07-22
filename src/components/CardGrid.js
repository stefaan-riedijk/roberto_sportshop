import React from 'react'

function cardGrid( props ) {
  return (
      <div className="grid grid-cols-3 lg:grid-cols-5 max-h-32">
          {props.children}
      </div>
  )
}

export default cardGrid