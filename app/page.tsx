import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function Home() {
  redirect("/profile");

}
