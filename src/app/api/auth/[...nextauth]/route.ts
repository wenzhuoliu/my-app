import { ROOT_PATH } from '@/app/const/constants';
import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export function generateStaticParams() {
  return [
    {
      nextauth: [
        `${ROOT_PATH}signin`,
        `${ROOT_PATH}signout`,
        `${ROOT_PATH}csrf`,
      ],
    },
  ];
}

const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
