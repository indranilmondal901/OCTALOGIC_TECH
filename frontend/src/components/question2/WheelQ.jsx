import React, { useState, useContext } from 'react'
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import "../question2/WheelQ.css"

const WheelQ = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const [wheel, setWheel] = useState("");

  const handelNext = () => {
    if (wheel) {
      dispatch({
        type: "UPDATE_WHEEL",
        payload: { wheel }
      });
      navigate("/q3")
    } else {
      window.alert("Choose One")
    }
  }
  console.log(state.userFirstName)

  return (
    <div className="q-wrapper">
      <h1 id="q2-h1">No Of Weels?</h1>
      <div id="q2-input">
        <input type="radio" id="two" name="wheel" value="2" onClick={(e) => setWheel(e.target.value)} />
        <label htmlFor="2"> TWO Wheeler 🚲</label><br />
        <input type="radio" id="four" name="wheel" value="4" onClick={(e) => setWheel(e.target.value)} />
        <label htmlFor="4"> Four Wheeler 🚗</label><br />
        <button type='submit' onClick={handelNext}>NEXT</button>
      </div>
    </div>
  )
}

export default WheelQ;
