// import { authOptions } from "@/lib/auth-options";
// import NextAuth from "next-auth/next";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'process.env.KEYCLOAK_CLIENT_ID',
      clientSecret: 'process.env.KEYCLOAK_CLIENT_SECRET',
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
