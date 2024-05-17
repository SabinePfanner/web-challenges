import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

const productsSchema = new Schema({
  name: { type: String, requiered: true },
  description: { type: String, requiered: true },
  price: { type: Number, requiered: true },
  currency: { type: Number, requiered: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productsSchema);

export default Product;
