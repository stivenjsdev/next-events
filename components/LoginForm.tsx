"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type LoginFormProps = {
  callbackUrl?: string;
};

export default function LoginForm({ callbackUrl }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("login...");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.status === 200) {
      toast.success("Login Successful");
      router.push(callbackUrl ?? "/profile");
    } else {
      if (res?.error === "CredentialsSignin") {
        res.error = "Wrong Password";
      }
      toast.error(`Login Failed: ${res?.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-6">
      <div className="space-y-2">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="input input-bordered w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter you email address"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="input input-bordered w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          minLength={6}
        />
      </div>
      <button className="btn btn-primary btn-block mt-4" type="submit">
        Log In
      </button>
    </form>
  );
}
