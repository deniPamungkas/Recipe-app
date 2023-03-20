import React from "react";
import "./index.scss";

const Recipe = (props) => {
  const { recipe, measure } = props;
  const rec = recipe.filter((res)=>{
    return ( res !== ' ' && res !== '' && res !== null);
  })
  const mea = measure.filter((res)=>{
    return( res !== ' ' && res !== '' && res !== null);
  })
  return (
    <div className="rec">
      <section className="ing">
        {rec.map((data,index) => {
          return <li key={index}>{data}</li>;
        })}
      </section>
      <section className="mea">
        {mea.map((data,index) => {
          return <li key={index} style={{listStyle:"none"}}>:  {data}</li>;
        })}
      </section>
    </div>
  );
};

export default Recipe;
