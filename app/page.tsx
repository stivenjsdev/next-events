import Button from "@/components/Button";
import { getUser } from "@/lib/actions/action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function Home() {
  const users = await getUser();

  return (
    <div className="m-2">
      <Button />
      <ul>
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
