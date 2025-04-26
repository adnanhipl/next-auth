// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
    GithubProvider({
        clientId: 'Ov23livWac8FvUz02OQY',
        clientSecret: '274427fa419048267c26cbb201f29b27dceb8b8a'
    }),
    GoogleProvider({
        clientId: '980901939398-12g9ktsnfst40uq1jk1bdjpb868r04pn.apps.googleusercontent.com',
        clientSecret: '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',
    }),
    ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
