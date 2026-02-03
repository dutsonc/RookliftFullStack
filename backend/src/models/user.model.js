import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 4, maxlength: 30 },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6, maxlength: 50 },
  createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
}
)
// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}
export const User = mongoose.model("User", userSchema);
