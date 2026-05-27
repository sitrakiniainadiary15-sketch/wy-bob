import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  colorCode: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true, default: 85 },
  stock: { type: Number, required: true, default: 0 },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);