import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../question3/VehicleQ.css";

const VehicleQ = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const wheels = state.wheels;

  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`https://octalogic-4rhu.onrender.com/vehicles/wheels/${wheels}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wheels]);

  const handelNext = () => {
    if (type) {
      // console.log(type);
      dispatch({
        type: "VEHICLE_TYPE",
        payload: { type }
      });
      navigate("/q4");
    } else {
      window.alert("Choose One");
    }
  };

  // Filter unique vehicle types
  const uniqueTypes = [...new Set(data.map((sData) => sData.type))];

  return (
    <div className="q-wrapper">
      <h1 id="q3-h1">Select Type</h1>
      <div id="q3-input">
        {uniqueTypes.map((vehicleType) => (
          <div key={vehicleType}>
            <input
              type="radio"
              name="type"
              value={vehicleType}
              onClick={(e) => setType(e.target.value)}
            />
            <label htmlFor={vehicleType}>{vehicleType}</label>
          </div>
        ))}
        <button type='submit' onClick={handelNext}>NEXT</button>
      </div>
    </div>
  );
};

export default VehicleQ;
