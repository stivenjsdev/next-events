"use server";

import { dbConnect } from "@/lib/dbConnect";
import { User, UserType } from "@/lib/models/user.model";
import { CreateUserFormData } from "@/types/form.type";
import bcrypt from "bcrypt";

export async function createUser(user: CreateUserFormData): Promise<UserType> {
  await dbConnect();

  const hashedPassword = await bcrypt.hash(user.password, 12);

  const newUser = new User({
    ...user,
    password: hashedPassword,
  });

  await newUser.save();

  return JSON.parse(JSON.stringify(newUser));
}
