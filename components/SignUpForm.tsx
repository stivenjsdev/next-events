"use client";

import { createUser } from "@/lib/actions/user.action";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await createUser({ email, name, password });

      if (user) {
        toast.success("Sign Up Successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Sign Up Failed: This email is already registered");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Stiven Trujillo"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter you email address"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          minLength={6}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-4">
        Sign Up
      </button>
    </form>
  );
}
