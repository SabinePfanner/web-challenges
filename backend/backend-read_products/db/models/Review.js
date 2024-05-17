import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, requiered: true },
  text: { type: String, requiered: true },
  rating: { type: Number, requiered: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
