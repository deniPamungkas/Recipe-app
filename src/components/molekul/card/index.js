import React from 'react'
import Button from '../../atom/button'
import "./index.scss"

function card(props) {
    const {img, name, klik,dataID} = props;
  return (
    <div className='card'>
        <div className='top'>
            <img src={img} alt='foodImg'/>
        </div>
        <div id={dataID} className='bottom'>
            <div className='strMeal'><h3>{name}</h3></div>
            <Button className="card-btn" onClick = {klik}>Get Recipe</Button>
        </div>
    </div>
  )
}

export default card