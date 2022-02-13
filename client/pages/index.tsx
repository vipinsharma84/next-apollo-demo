import Link from 'next/link';
import Name from '../components/Name';
import client from '../lib/with-apollo';
import { ApolloProvider } from "@apollo/client";

const Page = () => (
  <ApolloProvider client={client}>
    Welcome, <Name />
    <br />
    <br />
    <Link href="/about"><a>About</a></Link>
    <br />
    <br />
    <Link href="/userList"><a>Users list</a></Link>
  </ApolloProvider>
)

export default Page
