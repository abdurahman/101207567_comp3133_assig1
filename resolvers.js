const Hotels = require("./models/Hotels");
const Bookings = require("./models/Bookings");

exports.resolvers = {
  Query: {
    getHotel: async (parent, args) => {
      return await Hotels.find({});
    },
    getHotelByID: async (parent, args) => {
      return await Hotels.findById(args.hotel_id);
    },
    getHotelByCity: async (parent, args) => {
      return await Hotels.find({ city: args.city });
    },
    getHotelByName: async (parent, args) => {
        return await Hotels.find({ hotel_name: args.hotel_name});
    },
    getBooking: async (parent, args) => {
      return await Bookings.find({});
    },
  },
  Mutation: {
    createHotel: async (parent, args) => {
      console.log(args);
      let newHotels = new Hotels({
        hotel_id: args.hotel_id,
        hotel_name: args.hotel_name,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email,
        user_id: args.user_id
      });
      return await newHotels.save();
    },
    addBooking: async (parent, args) => {
        console.log(args);
        let newBookings = new Bookings({
          hotel_id: args.hotel_id,
          booking_date: args.booking_date,
          booking_start: args.booking_start,
          booking_end: args.booking_end,
          user_id: args.user_id
        });
        return await newBookings.save();
      },
    updateHotel: async (parent, args) => {
      console.log(args);
      if (!args.hotel_id) {
        return;
      }
      return await Hotels.findOneAndUpdate(
        {
          _id: args.hotel_id,
        },
        {
          $set: {
            hotel_id: args.hotel_id,
            hotel_name: args.hotel_name,
            street: args.street,
            city: args.city,
            postal_code: args.postal_code,
            price: args.price,
            email: args.email,
            user_id: args.user_id,
          },
        },
        { new: true },
        (err, hotels) => {
          if (err) {
            console.log("Something went wrong when updating the hotels");
          } else {
            return hotels;
          }
        }
      );
    },
    updateBooking: async (parent, args) => {
      console.log(args);
      if (!args.hotel_id) {
        return;
      }
      return await Bookings.findOneAndUpdate(
        {
          id: args.hotel_id,
        },
        {
          $set: {
            hotel_id: args.hotel_id,
            booking_date: args.booking_date,
            booking_start: args.booking_start,
            booking_end: args.booking_end,
            user_id: args.user_id,
          },
        },
        { new: true },
        (err, bookings) => {
          if (err) {
            console.log("Something went wrong when updating the bookings");
          } else {
            return bookings;
          }
        }
      );
    },
    deleteHotel: async (parent, args) => {
      console.log(args);
      if (!args.hotel_id) {
        return JSON.stringify({ status: false, message: "No ID found" });
      }
      return await Hotels.findByIdAndDelete(args.hotel_id);
    },
    deleteBooking: async (parent, args) => {
      console.log(args);
      if (!args.hotel_id) {
        return JSON.stringify({ status: false, message: "No ID found" });
      }
      return await Bookings.findByIdAndDelete(args.hotel_id);
    },
  },
};
