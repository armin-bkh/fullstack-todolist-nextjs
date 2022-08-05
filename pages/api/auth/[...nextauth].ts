import nextAuth from "next-auth";
import githubProvider from "next-auth/providers/github";

export default nextAuth({
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});
