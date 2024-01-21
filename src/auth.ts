import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GithubProvider from 'next-auth/providers/github';
import { AuthOptions } from 'next-auth';
import clientPromise from './lib/mongo';

export const authOptions: AuthOptions = {
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET || '',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',

      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        email: user.email,
      },
    }),
  },
};
