import React from 'react'
import "./index.scss"

function button(props) {
  return (
    <button onClick={props.onClick} className={`but ${props.className}`}>
        {props.children}
    </button>
  )
}

export default button