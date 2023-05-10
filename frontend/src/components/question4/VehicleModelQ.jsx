import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../question4/VehicleModelQ.css";

const VehicleModelQ = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const type = state.type;

  const [data, setData] = useState([]);
  const [model, setmodel] = useState("");

  useEffect(() => {
    axios.get(`https://octalogic-4rhu.onrender.com/vehicles/types/${type}`)
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
      }).catch((err) => {
        console.log(err)
      })
  }, [type])

  const handelNext = () => {
    if (model) {
      dispatch({
        type: "VEHICLE_MODEL",
        payload: { model }
      });
      navigate("/q5")
    } else {
      window.alert("Choose One")
    }
  }

  return (
    <div className="q-wrapper">
      <h1 id="q4-h1">Select Specific Model</h1>
      <div id="q4-input">
        {data.map((sData) => {
          return (
            <div key={sData._id}>
              <input
                type="radio"
                name="model"
                value={sData._id}
                onClick={(e) => setmodel(e.target.value)}
              />
              <label htmlFor={sData.model}>{sData.model}</label>
            </div>
          );
        })}
        <button type='submit' onClick={handelNext}>NEXT</button>
      </div>
    </div>
  )
}

export default VehicleModelQ
