import { getUserByEmail } from "@/lib/actions/user.action";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login", // Default is 'auth/signin'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const email = credentials.email.toLowerCase();
        const password = credentials.password;

        const user = await getUserByEmail(email);

        if (user && (await bcrypt.compare(password, user.password))) {
          return {
            id: user._id.toString(),
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
};
