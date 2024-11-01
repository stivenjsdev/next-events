import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../api/auth/[...nextauth]/authConfig";

type LoginProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default async function Login({ searchParams }: LoginProps) {
  const data = await getServerSession(authConfig);
  if (data !== null) {
    redirect("/profile");
  }
  return (
    <div className="mt-12 mx-auto w-full max-w-md p-4 bg-slate-100">
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p>Enter your Login Credentials</p>
      </div>
      <LoginForm callbackUrl={searchParams?.callbackUrl} />
    </div>
  );
}
