import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Restaurant = new mongoose.Schema(
  {
    lang: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String },
    logo: { type: String },
    qrCode: { type: String },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const RestaurantSchema =
  mongoose.models.Restaurant || mongoose.model("Restaurant", Restaurant);

export default RestaurantSchema;
