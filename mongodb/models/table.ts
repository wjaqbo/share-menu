import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Table = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    tableNumber: { type: Number, required: true },
    seats: { type: Number },
    qrCode: { type: String },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const TableSchema = mongoose.models.Table || mongoose.model("Table", Table);

export default TableSchema;
