const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    bla: {
      type: GraphQLID,
    },
  },
});

module.exports = RootQueryType;
