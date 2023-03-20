import React from "react";
import './index.scss'

const Description = (props) => {
    const {name, imgThumb,from,cat,source}=props;
  return (
    <div className="content-right">
      <img src={imgThumb} alt="thumbmeal" />
      <div className="meta">
        <h1>{name}</h1>
        <div className="sub-meta">
          <h4>Country : {from}</h4>
          <h4>Category : {cat}</h4>
          <h4>
            Source : <a href={source}>{source}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Description;
