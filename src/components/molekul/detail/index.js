import React, { useState } from "react";
import Button from "../../atom/button";
import Description from "../description";
import HowToMake from "../how";
import Recipe from "../recipe";
import Video from "../video";
import "./index.scss";

function Detail(props) {
  const [activ,setActiv] = useState('Desc')
  const {name, recipe, measure, step, className, closeBtn,imgThumb, from, cat, source, video} = props;

  const handleDesc=()=>{
    setActiv('Desc')
  }
  const handleRecipe=()=>{
    setActiv('Recipe')
  }
  const handleHow=()=>{
    setActiv('How')
  }
  const handleVid=()=>{
    setActiv('Vid')
  }
  return (
    <div className={`wrap-detail ${className}`}>
      <div className="detail">
        <div className="left">
          <div className="lists">
            <li onClick={handleDesc} className={`list ${activ === "Desc"? "activ" : ""}`}>Description</li>
            <li onClick={handleRecipe} className={`list ${activ === "Recipe"? "activ" : ""}`}>Recipe</li>
            <li onClick={handleHow} className={`list ${activ === "How"? "activ" : ""}`}>How To Make</li>
            <li onClick={handleVid} className={`list ${activ === "Vid"? "activ" : ""}`}>Video</li>
          </div>
        </div>
        <div className="right">
        <Button onClick={(e)=>{
          e.preventDefault()
          closeBtn('Desc', setActiv)
        }} className="close-btn">x</Button>
        {activ === 'Desc' && <Description name={name} imgThumb={imgThumb} from={from} cat={cat} source={source}/>}
        {activ === 'Recipe' && <Recipe recipe={recipe} measure={measure}/>}
        {activ === 'How' && <HowToMake step={step}/>}
        {activ === 'Vid' && <Video videoLink = {video}/>}
        </div>
      </div>
    </div>
  );
}

export default Detail;
