import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minLength: 4, maxlength: 30 },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minLength: 6, maxlength: 50 },
  createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
}
)
export const User = mongoose.model("User", userSchema);
