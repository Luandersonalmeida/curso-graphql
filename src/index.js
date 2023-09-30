import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
  type Query {
    user: User!
    users: [User!]!
  }
  type User{
    id: ID
    userName: String!
  }

  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '12345',
          userName: 'Mitnick',
        }
      },
      users: () => {
        return [
          {
            id: '12345',
            userName: 'Mitnick',
          },
          {
            id: '123456',
            userName: 'Kevin Mitnick',
          }
        ];
      }
    }
  }
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`)
})
