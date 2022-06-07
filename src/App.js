import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { add, subs,Plus,Minus,Mult,Devide } from "./Store/action";

export default function App() {

 const dispatch = useDispatch();
 const count = useSelector((state)=> state.count)
 const [num,setNum] = useState({})
 const handleOnChange = (e) => {
   setNum(e.target.value)
 }

  return (
    <div className="App">
      <h1>Redux</h1>
        <h1>Count: {count}</h1>
        <div>
          <form>
          
            <button onClick={()=> dispatch(add()) }>+</button>
          <button onClick={()=> dispatch(subs()) } >-</button><br/><br/>
          <input 
            placeholder="Enter Number To be Calculated"
            onChange={handleOnChange}
            /> <br/><br/>
          <button onClick={()=> dispatch(Plus()) } >implement count by Number</button>
          <button onClick={()=> dispatch(Mult()) } >Multiply count by Number</button><br/><br/>

          <button onClick={()=> dispatch(Minus()) } >Substract count by Number</button>
          <button onClick={()=> dispatch(Devide()) } >Devide count by Number</button>
          </form><br/>
          


        </div>



    </div>
  );
}
