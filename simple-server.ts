import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

type User = {
  id: string;
  name: string;
};

type createUser = {
  name: string;
};

const users: User[] = [];

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
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
      const user = {
        id: randomUUID(),
        name: name,
      };

      users.push(user);

      return user;
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
