import apiInstance from "@/service/http/api-instance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "login-credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await apiInstance.post("/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          return {
            ...res.data.data,
            token: res.data.token,
          };
        } catch (error) {
          if (error instanceof Response) {
            return null;
          }

          throw new Error("Something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // console.log({ object: session, token });
      session = token as any;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
