const Hotels = require('./models/Hotels');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotels.find({});
        },
        getHotelByID: async (parent, args) => {
            return await Hotels.findById(args.hotel_id);
        },
        getHotelByCity: async (parent, args) => {
            return await Hotels.find({"city" : args.city});
        }
    },
    Mutation: {
        createHotel: async (parent, args) => {
            console.log(args)
            /*
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(email).toLowerCase())

            if(!isValidEmail){
                throw new Error("email not in proper format")
            }
            */
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
      updateHotel: async (parent, args) => {
            console.log(args)
            if (!args.hotel_id){
                return;
            }
            return await Hotels.findOneAndUpdate(
            {
                _id: args.hotel_id
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
                    user_id: args.user_id
                }
            }, {new: true}, (err, hotels) => {
                if (err)
                {
                    console.log('Something went wrong when updating the hotels');
                } else
                {
                    return hotels
                }
            }
        );
      },
      deleteHotel: async (parent, args) => {
        console.log(args)
        if (!args.hotel_id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Hotels.findByIdAndDelete(args.hotel_id)
      },
    }
  }