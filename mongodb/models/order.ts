import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Order = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    tableId: { type: String, required: true },
    items: { type: Array, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const OrderSchema = mongoose.models.Order || mongoose.model("Order", Order);

export default OrderSchema;
