import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
  type Query {
    hello: String,
    hi: String
  }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        return 'retorna string';
      },
      hi: () => {
        return 'oi';
      },
    }
  }
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`)
})
