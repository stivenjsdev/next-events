import { Document, Model, model, models, Schema, Types } from "mongoose";

export type UserType = Document & {
  _id: Types.ObjectId;
  email: string;
  name: string;
  password: string;
  imageUrl?: string;
  // createdAt: Date;
  // updatedAt: Date;
};

const UserSchema = new Schema<UserType>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<UserType> =
  models.User || model<UserType>("User", UserSchema);
