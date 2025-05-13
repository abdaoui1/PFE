import type { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "./action";


export interface DefaultUser {
    id: string
    email?: string | null
    name?: string | null
    image?: string | null
  }

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {          
          type: "email",          
        },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        
        const user = await getUser(credentials.email);

        if(credentials.email !== user?.email || credentials.password !== user?.password){
            return null;
        }
        
              
        return {
          id:user.userId.toString(),
          email:user.email,
          image:user.image,          
        }
      },
    })],   
  callbacks: {   
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,        
        email:token.email,
      },
    }),
    jwt: ({ token, user }:{token:JWT , user:DefaultUser}) => (user ? { ...token, id: user.id} : token),
  },
  pages: {
    signIn: "/login",
  },
};