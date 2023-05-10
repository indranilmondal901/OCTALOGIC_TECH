import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../question5/DateRange.css";

const DateRange = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const handleNext = () => {
    if (startDate && endDate) {
      console.log(startDate, endDate)
      dispatch({
        type: "DATE_RANGER",
        payload: { startDate, endDate },
      });
      console.log(state.vehicle)
      axios.post("https://octalogic-4rhu.onrender.com/bookings", {
        userFirstName: state.userFirstName,
        userLastName: state.userLastName,
        vehicleId: state.vehicle,
        startDate: startDate,
        endDate: endDate
      }).then(res => {
        // console.log(res.data);
        window.alert(res.data);
        navigate("/allbooking");
      }).catch(error => {
        console.log(error);
      });

    } else {
      alert("fill all the field")
    }
  };

  return (
    <div className="q-wrapper">
      <h1 id="q5-h1"> Booking Date</h1>
      <div id="q5-input">
        <label>
          Booking From (Start Date) {"\u00A0"}
          <input
            type="date"
            name="startDate"
            id="startDate"
            required
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />
        </label>
        <label>
          Booking Upto(End Date) {"\u00A0"}
          <input
            type="date"
            name="endDate"
            id="endDate"
            required
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleNext}>
          BOOK
        </button>
      </div>
    </div>
  )
}

export default DateRange
