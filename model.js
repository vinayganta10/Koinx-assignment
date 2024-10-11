import mongoose, { Schema } from "mongoose";

let schema = new Schema({
    "name":String,
    "symbol":String,
    "price": Number,
    "marketCap":Number,
    "change24h": Number,
    "lastUpdated":Date
});

let coins = mongoose.model('coins',schema);

export default coins;