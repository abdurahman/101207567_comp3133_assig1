const mongoose = require('mongoose');

const HotelsSchema = new mongoose.Schema({
    hotel_id: Number,
    hotel_name: String,
    street: String,
    city: String,
    postal_code: String,
    price: Number,
    email: String,
    user_id: Number,
});

const Hotels = mongoose.model("Hotels", HotelsSchema);
module.exports = Hotels;