import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );

        const filterUser = data.filter((user) => user.email === email);

        if (!filterUser[0]) {
          throw new Error('User not found!');
        }

        if (filterUser[0].website !== password) {
          throw new Error('Invalid email or password!');
        }

        return filterUser[0];
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ user, token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
});
