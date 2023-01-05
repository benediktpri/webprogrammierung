const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();

let reports = [
    { animal: "exampleTier1", location: "exampleOrt1", info: "exampleHinweis1"},
    { animal: "exampleTier1", location: "exampleOrt4", info: "exampleHinweis4"},
    { animal: "exampleTier1", location: "exampleOrt5", info: "exampleHinweis5"},
    { animal: "exampleTier2", location: "exampleOrt2", info: "exampleHinweis2"},
    { animal: "exampleTier3", location: "exampleOrt3", info: "exampleHinweis3"}
]

const typeDefs = `

    type Report {
        animal: String!
        location: String!
        info: String!
    }

    type Query{
        reports: [Report!]!
        animalReport(animal: String!): Report
        
    }
    

    type Mutation {
        createReport(animal: String!, location: String!, info: String!): Report!
    }
`;

const resolvers = {
    Query: {
        reports: () => reports,
        animalReport: (parent, args) => reports.filter(report => report.animal === args.animal)
    },

    Mutation: {
        createReport: (parent, args) => {
            const newReport = { animal: args.animal, location: args.location, info: args.info };
            reports.push(newReport);
            return newReport;
        }
    }
};
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});