import { ApolloServer, gql } from "apollo-server";

type createUser = {
  name: string;
};

const typeDefs = gql`
  type Query {
    users: [String!]!
  }

  type Mutation {
    createUser(name: String!): String!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {
    createUser: (_: any, { name }: createUser) => {
      users.push(name);

      return name;
    },
  },
};

const users: string[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
