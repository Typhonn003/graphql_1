import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
