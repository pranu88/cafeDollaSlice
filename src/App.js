import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
// ------------->Step 1

const reducer = (state, action) => {
  switch (action.type) {
    case "VEGAN":
      return {
        currentCalories: 550,
        currentImage:
          "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/kosfsg4xxwkk3wybp9ha",
        currentPrice: 1.55 ,
      };
    // Think of this as Each Play to be executed
    case "MEATLOVERS":
      return {
        currentCalories: 2200,
        currentImage:
          "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/fc8zv02gbazetpst09ne",
        currentPrice: 1.99,
      };
    case "CHEESE":
      return {
        currentCalories: 1200,
        currentImage:
          "https://www.seriouseats.com/thmb/-_mziT2tl0F63I4kfji4S6bE-cA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__10__20181015-state-of-slice-delmar-clay-williams-2de043fa5a0d4475b6c567e4a974b13b.jpg",
        currentPrice: .99,
      };
    default:
      return state;
  }
};
// ------------------> Step 2

function App() {
  // ---------->Step3
  const [state, dispatch] = useReducer(reducer,{
    currentCalories: 0,
    currentImage: "https://cdn.vox-cdn.com/thumbor/dY9Da_gCeNOYqxvdK1baRDXY4nQ=/0x0:3000x2000/1200x900/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/66667934/VARUNI2_16.0.jpg",
    currentPrice: 0
  })






  return <div className="App">

  <h1> Calories:{state.currentCalories} </h1>

  <img className="pizza" src={state.currentImage}/>


  <h1> Price: {state.currentPrice} </h1>






  <button onClick={()=>{
    dispatch({type: "VEGAN"})
  }}> Order vegan</button>

<button onClick={()=>{
    dispatch({type: "MEATLOVERS"})
  }}> Order Meat</button>

<button onClick={()=>{
    dispatch({type: "CHEESE"})
  }}> Order Cheese</button>

  </div>;



}

export default App;
