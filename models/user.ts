import { ObjectId } from "mongodb";
import mongoose, { model, Schema } from "mongoose";
import { gender, race, classYear } from "../types/enums";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  profile: {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    optIn: { type: Boolean },
    inRelationship: { type: Boolean },
    gender: { type: String, enum: gender },
    genderPref: [{ type: String, enum: gender }],
    age: { type: Number },
    height: { type: Number },
    city: { type: String },
    year: { type: String, enum: classYear },
    major: { type: String },
    race: [{ type: String, enum: race }],
    bio: { type: String },
  },
  survey: {
    agePref: {
      youngest: { type: Number },
      oldest: { type: Number },
    },
  },
  crushes: [{ type: String }],
  matches: [{ type: ObjectId, ref: "User" }],
});

export const User = mongoose.models.User || model("User", userSchema);
