import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

import { typeDefs } from "../../graphql/typeDefs.generated.js";
import { resolvers } from "../../graphql/resolvers.generated.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };