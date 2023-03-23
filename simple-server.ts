import {ApolloServer, gql} from 'apollo-server'

const typeDefs = gql `
  type Query {
    helloword: String!
  }

`

const server = new ApolloServer({
    typeDefs,
    resolvers: {
       Query : {
         helloword: () => {
            return `helo word`
         }
       }
    }
})

server.listen().then(({url}) => {
    console.log(`🚀 HTTP server running on ${url}`)
}).catch((err) => {
    
});