"use client";

import { getUser } from "@/lib/actions/action";
import { useEffect, useState } from "react";

export default function Button() {
  // create a state
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const users = await getUser();
    setUsers(users);
  }

  if (!users || users.length == 0) return <div>Loading...</div>;

  return (
    <>
      <button className="btn btn-primary" onClick={fetchUsers}>
        Get Users
      </button>
      <ul className="bg-blue-300">
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
