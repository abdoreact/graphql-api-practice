const express=require("express")
const graphexpress=require("express-graphql")
const app=express()
app.use("/api", graphexpress.graphqlHTTP({
    schema:require("./schema"),
    graphiql:true
}))
app.listen(8080)