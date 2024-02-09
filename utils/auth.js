import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; 

import { compare } from "bcrypt";
import prisma from "./db";

export const authOptions = {
    adapter : PrismaAdapter(prisma),
    session : {
      strategy : ' jwt'
    },
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          CredentialsProvider({
        
            name: "Credentials",
       
            credentials: {
              email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

              if(!credentials?.email || !credentials?.password){
                return null
              }
              
              const existUser = await prisma.user.findUnique({
                where: {email: credentials?.email}
              });

              console.log("Exist User >>> ", existUser);

              if(!existUser){
                return null
              }

              const passwordMatch = await compare(credentials?.password , existUser.password)

              if(!passwordMatch){
                return null
              }

              return {
                id       : existUser.id,
                username : existUser.username,
                email    : existUser.email
              }

            }
          })
    ],
    secret : process.env.SECRET,
    pages:{
        signIn : "/login"
    },
    callbacks :{
      async jwt({ token, user }) {
       
        if (user) {
          return {
            ...token,
            username: user.username,
          };
        }

        return token;
      },
      
      async session({token , session}){

        return {
          ...session,
          user:{
            ...session.user,
            username : token.username
          }
        }
      }
     
    }
       

   
}

