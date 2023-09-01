import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next/types";
import { generateToken } from "@/utils";


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const providers = [
        GoogleProvider({
            clientId:
                "255487252052-a98qu2vknkcq08hj5flukfmod37ckqr5.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ];

    return await NextAuth(req, res, {
        providers,
        callbacks: {
            async jwt({ token, user }) {

                if(user){
                    const newT = generateToken({name: user.name, email: user.email});
                    return { ...token, ...user, "jwt": newT };
                }
                return token ;
            },
            async session({ session, token, user }) {
                session.user = token as any;
                return session;
            },
        },
        secret: "p1h0a0n3v2u0l0o1i"
    });
}
