import apiInstance from "@/service/api-instance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";

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

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "login-after-build-store",
      name: "After Build Store",
      credentials: {
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials) {
        try {
          const res = await apiInstance.post("/auth/sign/finish-build", {
            email: credentials?.email,
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

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "switch-users",
      name: "Swith Users",
      credentials: {
        store_id: { label: "Store ID", type: "number" },
      },
      async authorize(credentials, req) {
        try {
          const session = await getSession({ req });
          const res = await apiInstance.post(
            "/auth/switch-store",
            {
              store_id: credentials?.store_id,
            },
            {
              headers: {
                Authorization: `Bearer ${session?.token}`,
              },
            }
          );

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
