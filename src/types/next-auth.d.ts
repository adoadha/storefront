import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      tenant_id: string;
      role: string;
    };
    token: string;
    id?: number;
    email?: string;
  }
}
