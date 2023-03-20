import React, { useState } from "react";
import axios from "axios";
import Card from "./components/molekul/card";
import Detail from "./components/molekul/detail";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [resp, setResp] = useState([]);
  const [det, setDet] = useState({});
  const [vis, setVis] = useState(false);
  let ingredients = [
    det.strIngredient1,
    det.strIngredient2,
    det.strIngredient3,
    det.strIngredient4,
    det.strIngredient5,
    det.strIngredient6,
    det.strIngredient7,
    det.strIngredient8,
    det.strIngredient9,
    det.strIngredient10,
    det.strIngredient11,
    det.strIngredient12,
    det.strIngredient13,
    det.strIngredient14,
    det.strIngredient15,
    det.strIngredient16,
    det.strIngredient17,
    det.strIngredient18,
    det.strIngredient19,
    det.strIngredient20,
  ];
  let measures = [
    det.strMeasure1,
    det.strMeasure2,
    det.strMeasure3,
    det.strMeasure4,
    det.strMeasure5,
    det.strMeasure6,
    det.strMeasure7,
    det.strMeasure8,
    det.strMeasure9,
    det.strMeasure10,
    det.strMeasure11,
    det.strMeasure12,
    det.strMeasure13,
    det.strMeasure14,
    det.strMeasure15,
    det.strMeasure16,
    det.strMeasure17,
    det.strMeasure18,
    det.strMeasure19,
    det.strMeasure20,
  ];

  const getData = async () => {
    await axios
      .get(`https://themealdb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((res) => {
        setResp(res.data.meals);
      })
      .catch((err) => console.log(err));
  };
  const getDetails = async (e) => {
    await axios
      .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${e}`)
      .then((res) => {
        setDet(res.data.meals[0]);
      });
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setInput("");
  };
  const handleKlik = (e) => {
    e.preventDefault();
    const mealID = e.target.parentElement.id;
    getDetails(mealID);
    setVis(true);
  };
  const handelVis = () => {
    if (vis === true) {
      return "visible";
    } else {
      return "invisible";
    }
  };
  const handleClose = (bukan, setActiv) => {
    setVis(false);
    setDet({});
    setActiv(bukan)
  };
  return (
    <div className="App">
      <div className="head">
        <h1>Find Meals for your ingredient</h1>
        <p>Real food doesn't have ingredients, real food is ingredients.</p>
        <p>
          <i>-Jamie Oliver</i>
        </p>
        <form onSubmit={handleSubmit} className="search">
          <input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Enter an Ingredient"
          />
          <button>
            <LocationSearchingIcon />
          </button>
        </form>
        <h1>Your Search results :</h1>
      </div>
      <div className="bodi">
        <div className="wrap-bodi">
          {resp ? (
            resp?.map((item) => {
              return (
                <li key={item.idMeal} className="li">
                  <Card
                    dataID={item.idMeal}
                    klik={handleKlik}
                    name={item.strMeal}
                    img={item.strMealThumb}
                  />
                </li>
              );
            })
          ) : (
            <div>MAAF KEYWORD SALAH, tidak ada dalam makanan</div>
          )}
        </div>
      </div>
      <Detail
        closeBtn={handleClose}
        className={handelVis()}
        name={det.strMeal}
        imgThumb={det.strMealThumb}
        from={det.strArea}
        cat={det.strCategory}
        source={det.strSource}
        recipe={ingredients}
        measure={measures}
        step={det.strInstructions}
        video={det.strYoutube}
      />
    </div>
  );
}

export default App;
