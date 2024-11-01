"use server";

import { dbConnect } from "@/lib/dbConnect";
import { User, UserType } from "@/lib/models/user.model";
import { CreateUserFormData } from "@/types/form.type";
import bcrypt from "bcrypt";

export async function createUser(userData: CreateUserFormData) {
  await dbConnect();

  const hashedPassword = await bcrypt.hash(userData.password, 12);

  const newUser = new User({
    ...userData,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  // const user = {
  //   id: savedUser._id!.toString(),
  //   name: savedUser.name,
  //   email: savedUser.email,
  //   imageUrl: savedUser.imageUrl,
  //   password: savedUser.password,
  // };

  const user = JSON.parse(JSON.stringify(savedUser));

  return user;
  // return { success: true };
}

export async function getUserByEmail(email: string): Promise<UserType | null> {
  await dbConnect();

  const user = await User.findOne({ email });

  if (!user) throw new Error("User Not Found");

  // return JSON.parse(JSON.stringify(user));
  return user;
}
