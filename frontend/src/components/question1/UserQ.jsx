import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Link, useNavigate } from 'react-router-dom';
import "../question1/UserQ.css"

const UserQ = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const handleNext = () => {
    if (fname && lname) {
      dispatch({
        type: "SET_USER",
        payload: { fname, lname },
      });
      navigate("/q2")
    } else {
      alert("fill all the field")
    }
  };

  return (
    <div className="q-wrapper">
      <h1 id="q1-h1"> What Is Your Name</h1>
      <div id="q1-input">
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleNext}>
        NEXT
      </button>
      </div>
      <Link to="/allbooking">
      <p>Show All Bookinngs</p>
      </Link>
    </div>
  );
};

export default UserQ;
