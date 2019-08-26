const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLString},
        email: {type: GraphQLString},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        password: {type: GraphQLString}

    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    user: {
        type: UserType,
        args: {
            id:{GraphQLString}
        }
    }
})

module.exports = new GraphQLSchema({

})