# graphql-goodreads
[GraphQL]("https://graphql.org") top layer for [Goodreads API]("https://www.goodreads.com/api")
  
<p float="left">
  <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/034/landscape/graphqllogo.png" alt="graphql" width="200" height="100"/>

  <img src="https://appedreview.com/app/wp-content/uploads/2017/02/Screen-Shot-2017-02-27-at-10.17.24-AM.png" alt="goodreads" width="100" height="100"/>
</p>
  
Main tools:  
* nodejs with express
* xml2js - convert xml to js object (goodreads api returns xml response) 
* express-graphql module
  
Edit `schema.js` to accept more data from the Goodreads API.  
  
Navigate to `localhost:3000/graphql` to access the `graphiql` interface similar to the one below:  
![graphiql](images/graphiql_interface.JPG)
