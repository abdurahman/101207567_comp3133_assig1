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

    type Query {
        getHotel: [Hotels]
        getHotelByID(hotel_id: ID!): [Hotels]
        getHotelByName(hotel_name: String!): [Hotels]
        getHotelByCity(city: String!): [Hotels]
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
    }
`


/*
type Users {
    user_id: Int!
    username: String!
    password: String!
    email: String!
}

type Booking {
    booking_date: Date!
    booking_start: Date!
    booking_end: Date!
}

getBookings(id: Int!,
            booking_date: Date!,
            booking_start: Date!,
            booking_end: Date!,
            user_id: Int!): [Booking, Users, Hotels]

            getUsers: [Users]
        getUsersByID(user_id: Int!): [Users]
        getUsersByUsername(username: String!): [Users]
        getUsersByPassword(password: String!): [Users]
        getUsersByEmail(email: String!): [Users]

        createUserProfile(user_id: Int!
            username: String!
            password: String!
            email: String!): Users

            bookHotels(hotel_id: Int!
            booking_date: Date!
            booking_start: Date!
            booking_end: Date!): Users
*/