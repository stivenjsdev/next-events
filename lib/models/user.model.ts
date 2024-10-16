import { Document, Model, Schema, model, models } from "mongoose";

export type UserType = {
  email: string;
  name: string;
  password: string;
  imageUrl?: string;
};

export type UserDocumentType = Document & UserType;

const UserSchema = new Schema<UserDocumentType>(
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

export const User: Model<UserDocumentType> =
  models.User || model<UserDocumentType>("User", UserSchema);
