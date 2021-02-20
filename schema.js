const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type Hotels {
        hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Float!
    }

    type Bookings {
        hotel_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Float!
    }

    type Query {
        getHotel: [Hotels]
        getHotelByID(hotel_id: ID!): [Hotels]
        getHotelByName(hotel_name: String!): [Hotels]
        getHotelByCity(city: String!): [Hotels]
        getBooking: [Bookings]

    }

    type Mutation {
        createHotel(hotel_id: ID!
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            user_id: Float!): Hotels
        updateHotel(hotel_id: ID!
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            user_id: Float!): Hotels
        deleteHotel(hotel_id: ID!): Hotels
        addBooking(hotel_id: ID!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            user_id: Float!): Bookings
        updateBooking(hotel_id: ID!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            user_id: Float!): Bookings
        deleteBooking(hotel_id: ID!): Bookings
    }
`


/*
type Users {
    user_id: Int!
    username: String!
    password: String!
    email: String!
}

            getUsers: [Users]
        getUsersByID(user_id: Int!): [Users]
        getUsersByUsername(username: String!): [Users]
        getUsersByPassword(password: String!): [Users]
        getUsersByEmail(email: String!): [Users]

        createUserProfile(user_id: Int!
            username: String!
            password: String!
            email: String!): Users

*/