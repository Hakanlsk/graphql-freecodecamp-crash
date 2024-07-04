export const typeDefs = `#graphql
    type Game {
        id: ID!                         #! işarti null olamayacağını belirtir            
        title: String!
        platform: [String!]!
    }
    type Review{
        id:ID!
        rating: Int!
        content: String!
    }
    type Author{
        id:ID!
        name: String!
        verified: Boolean!
    }
    type Query{
        reviews: [Review]   #! Review listesini döndürür , ! olmadığı için boş olabilir
        games: [Game]
        authors: [Author]
    }
`;
