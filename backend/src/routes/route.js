const express = require('express');
const router = express.Router();
const { Vehicle, Booking } = require('../model/schema');

// Create a new vehicle
router.post('/vehicles', async (req, res) => {
    try {
        const { type, model, wheels } = req.body;
        const vehicle = new Vehicle({ type, model, wheels });
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all vehicles
router.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.send(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Get a vehicle by ID
router.get('/vehicles/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        res.send(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Get vehicles by number of wheels
router.get('/vehicles/wheels/:wheels', async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ wheels: req.params.wheels });
        res.send(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Get vehicles by type
router.get('/vehicles/types/:type', async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ type: req.params.type});
        res.send(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});


// Create a booking
router.post('/bookings', async (req, res) => {
    try {
        const { userFirstName, userLastName, vehicleId, startDate, endDate } = req.body;
        console.log(vehicleId)
        const vehicle = await Vehicle.findById(vehicleId);
        console.log(vehicle);
        if (!vehicle) {
            return res.status(400).send('Invalid vehicle ID');
        }
        const booking = new Booking({
            userFirstName,
            userLastName,
            vehicle,
            startDate,
            endDate
        });
        await booking.save();
        res.send('Booking created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('vehicle');
        res.send(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
