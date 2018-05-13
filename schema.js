const fetch = require('node-fetch')
const utlil = require('util')
const parseXML = utlil.promisify(require('xml2js').parseString)
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

api_key = 'oJWo7PjObM9vjK9zzBGJDw'
/*
fetch(url).then(
    response => response.text()
).then(parseXML)
*/

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '....',
    fields: () => ({
        name: {
            type:GraphQLString,
            resolve: xml => xml.GoodreadsResponse.author[0].name[0]
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: '....',
        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: (root, args) => {
                    return fetch(                    
                    `https://www.goodreads.com/author/show.xml?id=${args.id}&key=${api_key}`
                )
                .then(response => response.text())
                .then(parseXML)
                }
            }
        })
    })
});