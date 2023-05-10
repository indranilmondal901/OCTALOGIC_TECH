import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../viewBookingsPage/Bookings.css"

const Bookings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/bookings")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1 id="booking-h1">ALL BOOKINGS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Wheels</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Model</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking._id}</td>
                            <td>{booking.userFirstName}</td>
                            <td>{booking.userLastName}</td>
                            <td>{booking.vehicle.wheels}</td>
                            <td>{booking.vehicle.type}</td>
                            <td>{booking.vehicle.model}</td>
                            <td>{(booking.startDate).split("T")[0]}</td>
                            <td>{(booking.endDate).split("T")[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Bookings;
