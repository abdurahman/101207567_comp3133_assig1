const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
    hotel_id: Number,
    booking_date: String,
    booking_start: String,
    booking_end: String,
    user_id: Number,
});

const Bookings = mongoose.model("Bookings", BookingsSchema);
module.exports = Bookings;