const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
      "https://images.unsplash.com/photo-https://www.google.com/url?sa=i&url=https%3A%2F%2Fnobero.com%2Fproducts%2Fplain-classic-fit-t-shirt-5&psig=AOvVaw1CfD4Vu94Qx3YUlW4mpBfQ&ust=1721213801821000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiTq5yzq4cDFQAAAAAdAAAAABAE-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.https://www.google.com/url?sa=i&url=https%3A%2F%2Fnobero.com%2Fproducts%2Fplain-classic-fit-t-shirt-5&psig=AOvVaw1CfD4Vu94Qx3YUlW4mpBfQ&ust=1721213801821000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiTq5yzq4cDFQAAAAAdAAAAABAE/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        : v,
    },
    price: {
        type: Number,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    rating: Number,
    reviews: String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;